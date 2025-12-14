# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

Personal executive assistant for managing Chris's personal email (chrislee82@gmail.com). This project uses the `gmail-personal` MCP server for all email operations.

## MCP Server

- **gmail-personal**: Connected to chrislee82@gmail.com
- Do NOT use `gmail-product-scout` - that's for work email in a separate project

## Key Skill

The `personal-ea` skill (in `.claude/skills/personal-ea/SKILL.md`) contains:
- Gmail queries that match Superhuman's split inbox views
- Instructions for email triage workflows

## Superhuman Integration

Chris uses Superhuman with split inbox views. Email queries must account for Superhuman's label structure (e.g., `[Superhuman]/AI/News`) and exclude labels that route emails to other splits (e.g., `kids/park-day`, `kids/mccs`).
