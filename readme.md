
# Templated Book progress

A project to automate book updates from an [Airtable](https://airtable.com/invite/r/8nBbHRNB) base to a Github Profile. It does this by fetching records from an airtable base, formatting it using an Ascii percentage bar and generating a new markdown file based on a template. It is intended to be used with a Github Action to update the readme.

# Features
Each feature resides in `/utils` and is used in `app.js`.
1. **Airtable** uses the Airtable api to fetch records that match the field `currently reading` and returns the `title` and `reading percentage` fields.
2. **Percentage bar Ascii** takes a percentage as a whole number and the unit length of the bar. It produces a bar that is displayed like this `███░░░░░░░░░░░░░░░░░░░░░░ 13%`
3. **Template compiler** takes the markdown file in template and replaces template variables `{{ varName }}` with the matching key value in a content variable. It then generates a `readme.md` file
## Examples
Actual example of the current books I'm reading
```text
████████░░░░░░░░░░░░░░░░░ 35%  Dark Money 
███░░░░░░░░░░░░░░░░░░░░░░ 13%  Pedagogy of the Oppressed 
███████████████░░░░░░░░░░ 60%  Structuring Design 
```

