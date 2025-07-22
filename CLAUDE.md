# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is an educational repository containing course materials for "Graph Data Modeling with AI" - a 14-week undergraduate course. The repository uses MkDocs to generate a static website from markdown files.

## Key Development Commands

### Site Generation
- **Build the site**: `mkdocs build`
- **Serve locally for development**: `mkdocs serve` (serves at http://127.0.0.1:8000)
- **Deploy to GitHub Pages**: `mkdocs gh-deploy`

### Utility Scripts
- **Generate table of contents**: `cd src/gen-toc && python generate-toc.py`
- **Convert CSV to JSON for visualizations**: `cd src/csv-to-json && python csv-to-json.py`
- **Sort glossary entries**: `cd src/sort-glossary && python sort-glossary.py`

## Architecture and Structure

### Content Organization
- **docs/**: Main content directory for MkDocs
  - **chapters/**: 27 numbered chapters (01-introduction through 27-ai-futures)
  - **prompts/**: AI prompts for generating course content and models
  - **sims/**: Interactive visualizations and graph simulations
  - **img/**: Images, logos, and banner graphics
  - **css/** and **js/**: Custom styling and JavaScript

### Chapter Structure
- Each chapter is in a numbered directory format: `NN-chapter-name/`
- All chapters contain an `index.md` file as the main content
- Chapters cover progression from basic concepts to advanced topics like bitemporal modeling and AI futures

### Interactive Visualizations
- **Learning Graph Viewer**: Interactive visualization of course concepts and dependencies using vis.js
- **Template Models**: HTML templates for various graph models (social networks, customer graphs, learning management systems)
- **Data Conversion**: CSV-to-JSON pipeline for creating vis.js compatible graph data

### Content Generation
- Uses AI prompts to generate educational content systematically
- Concept enumeration, dependency mapping, and taxonomy generation
- Automated table of contents generation from chapter content

### MkDocs Configuration
- Uses Material theme with green/purple color scheme
- Includes navigation expansion, search, social plugins
- Google Analytics integration
- Custom CSS and JavaScript enhancements

## Working with Visualizations

When modifying or creating graph visualizations:
- HTML templates use vis.js library from unpkg CDN
- Graph data typically stored as JSON with `nodes` and `edges` arrays
- Node objects contain `id`, `label`, and `group` properties
- Edge objects contain `from` and `to` properties referencing node IDs

## Content Development Workflow

1. Chapter content is written in individual `index.md` files
2. Use utility scripts to generate aggregated content (TOC, sorted glossaries)
3. Interactive simulations reference JSON data files created from CSV sources
4. MkDocs builds the complete site from the docs directory structure

## Key Files to Understand
- `mkdocs.yml`: Main configuration defining site structure and navigation
- `docs/course-description.md`: Formal course overview and learning objectives
- `src/gen-toc/generate-toc.py`: Concatenates all chapter content with header level adjustment
- `docs/sims/learning-graph/`: Contains the interactive concept dependency visualization