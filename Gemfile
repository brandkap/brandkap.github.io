# frozen_string_literal: true

source 'https://rubygems.org'

# Build using GitHub Pages
gem 'github-pages', '~> 213', group: :jekyll_plugins

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem 'tzinfo', '~> 1.2'
  gem 'tzinfo-data'
end

# Performance-booster for watching directories on Windows
gem 'wdm', '~> 0.1.1', platforms: [:mingw, :x64_mingw, :mswin]

# Run code on file changes
gem 'listen', '~> 3.5.0'
