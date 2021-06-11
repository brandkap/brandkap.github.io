# DesignBK

[designbk.com](https://designbk.com)

## Development Setup

1. Install [Ruby 2.7](https://www.ruby-lang.org/en/downloads/)
2. Install [Node 14](https://nodejs.org/en/download/)
3. Install Gems with `bundle install`
4. Install Node modules with `npm install`
5. Build the Tailwind CSS assets with `npm run build` (you should commit the generated CSS so GitHub Pages can use it)
6. Run the Jekyll server with `bundle exec jekyll serve`

For convenience, run `bin/watch-tailwind` and `bin/watch-jekyll` to automatically rebuild everything when files change.
