#!/bin/bash

# Exit on any error
set -e

# Enable verbose output for debugging
set -x

# Function to handle errors
handle_error() {
    echo "❌ Error occurred in deployment script at line $1"
    echo "🔄 Rolling back changes..."
    exit 1
}

# Set error trap
trap 'handle_error $LINENO' ERR

# Function to safely change directory
safe_cd() {
    local target_dir="$1"
    local description="$2"
    
    echo "📁 Changing to $description directory: $target_dir"
    cd "$target_dir" || {
        echo "❌ Failed to change to directory: $target_dir"
        exit 1
    }
    echo "✅ Successfully changed to: $target_dir"
}

# Function to safely remove .git directory
safe_remove_git() {
    if [ -d ".git" ]; then
        echo "🗑️  Removing existing .git directory..."
        rm -rf .git
        echo "✅ .git directory removed"
    else
        echo "ℹ️  No existing .git directory found"
    fi
}

# Function to deploy to a repository
deploy_to_repo() {
    local source_dir="$1"
    local repo_url="$2"
    local description="$3"
    
    echo ""
    echo "🚀 Starting $description deployment..."
    echo "📍 Source: $source_dir"
    echo "🎯 Repository: $repo_url"
    
    # Safely change to source directory
    safe_cd "$source_dir" "$description"
    
    # Safely remove .git directory
    safe_remove_git
    
    # Initialize git repository
    echo "🔧 Initializing git repository..."
    git init || {
        echo "❌ Failed to initialize git repository"
        exit 1
    }
    
    # Add remote origin
    echo "🔗 Adding remote origin..."
    git remote add origin "$repo_url" || {
        echo "❌ Failed to add remote origin"
        exit 1
    }
    
    # Add all files
    echo "📦 Adding files to git..."
    git add . || {
        echo "❌ Failed to add files to git"
        exit 1
    }
    
    # Commit changes
    echo "💾 Committing changes..."
    git commit -a -m "deploy" || {
        echo "❌ Failed to commit changes"
        exit 1
    }
    
    # Push to remote
    echo "🚀 Pushing to remote repository..."
    git push -f origin master || {
        echo "❌ Failed to push to remote repository"
        exit 1
    }
    
        # Clean up .git directory
    safe_remove_git

    # Return to root directory for next deployment
    echo "🔙 Returning to root directory..."
    cd ../../..
    echo "✅ $description deployment completed successfully!"
}

# Main deployment script
echo "🚀 Starting deployment process..."
echo "📍 Current directory: $(pwd)"
echo "🐧 Script is running on: $(uname -s)"
echo "📁 Current working directory: $PWD"



# Run generate and deploy commands
echo "🔨 Running build commands..."
npm run generate

# Wait a moment for files to be fully written
echo "⏳ Waiting for build to complete..."
sleep 2

# Verify directories exist
echo "🔍 Verifying build output directories..."
if [ -d ".output/public/art" ]; then
    echo "✅ Art directory exists"
else
    echo "❌ Art directory missing"
    exit 1
fi

if [ -d ".output/public/blog" ]; then
    echo "✅ Blog directory exists"
else
    echo "❌ Blog directory missing"
    exit 1
fi

if [ -d ".output/public/About" ]; then
    echo "✅ About directory exists"
else
    echo "❌ About directory missing"
    exit 1
fi

echo "📋 All directories verified, proceeding with deployment..."

npm run deploy

# Deploy Art
deploy_to_repo \
    ".output/public/art" \
    "https://github.com/kevinmoemyintmyat/art.git" \
    "Art"

# Deploy Blog
echo ""
echo "🚀 Starting Blog deployment..."
echo "📁 Copying error pages to blog directory..."

# Copy error pages to blog directory
if [ -f ".output/public/200.html" ] && [ -f ".output/public/404.html" ]; then
    cp .output/public/200.html .output/public/blog/ 2>/dev/null || echo "⚠️  Warning: Could not copy 200.html"
    cp .output/public/404.html .output/public/blog/ 2>/dev/null || echo "⚠️  Warning: Could not copy 404.html"
    echo "✅ Error pages copied to blog directory"
else
    echo "⚠️  Warning: Error pages not found, skipping copy"
fi

deploy_to_repo \
    ".output/public/blog" \
    "https://github.com/kevinmoemyintmyat/blog.git" \
    "Blog"

# Deploy AboutMe
deploy_to_repo \
    ".output/public/About" \
    "https://github.com/kevinmoemyintmyat/about.git" \
    "AboutMe"

echo ""
echo "🎉 All deployments completed successfully!"
echo "✅ Art, Blog, and AboutMe repositories have been updated"
echo "🌐 Your sites should be live shortly"
