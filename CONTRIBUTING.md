# Contributing Guidelines

> [!NOTE]  
> Before continuing, consider whether your contribution is better suited for the [Stack](https://github.com/CaiJimmy/hugo-theme-stack "Learn more about the Stack theme.") theme
> instead of just my blog. If your contribution is a general change to the theme, it might be better to contribute to the Stack theme directly.

Firstly, thanks for considering contributing to my blog!

There are many ways to contribute, from submitting bug reports and feature requests to writing code to incorporate into the blog.
Please follow these guidelines to avoid having your issue or pull request closed.

I look forward to your contribution!

> [!IMPORTANT]  
> I only accept contributions to source code, not content.

## Getting Started

A contribution can be as small as fixing a spelling mistake, reformatting a page or replacing a dead link.
Before contributing, make sure to install this project locally by following the
[Quickstart guide](/README.md#quickstart "View the Quickstart guide.").

Here are a few ways to get started:

- **Leave feedback!**  
  Let others know your thoughts about [new features][new-feature] or [enhancements][enhancement].
  Your opinions help me move this project forward!
- **Find bugs.**  
  Review [new features][new-feature] or [enhancements][enhancement] for bugs.
  [File a bug report][file-bug-report] if you find any!
- **Review bugs.**  
  Try reproducing bugs from [unassigned issues](https://github.com/anipalur/anipalur.com/issues?q=is%3Aissue+is%3Aopen+no%3Aassignee "View unassigned issues.").
  If valid, leave a comment to let others know.
- **Review patches.**  
  Look through the changes patches make and check if they meet these guidelines.
  Leave feedback where necessary!
- **Fix issues labelled as [`good-first-issue`](https://github.com/anipalur/anipalur.com/issues?q=is%3Aopen+is%3Aissue+label%3Agood-first-issue "View all issues labelled as 'good first issue'.").**  
  Issues labelled as `good-first-issue` are great for beginners.  

## Reporting Bugs

> [!WARNING]  
> **Do not report a vulnerability through an issue, pull request or anywhere else in public.**  
> **See [SECURITY.md](/.github/SECURITY.md "View the SECURITY.md file.") if you have found a vulnerability.**

[File a bug report][file-bug-report] using GitHub Issues.
See [SUPPORT.md](/.github/SUPPORT.md#reporting-bugs "Learn more about reporting bugs.") for more information.

## Feature and Enhancement Requests

[Request a feature](https://github.com/anipalur/anipalur.com/issues/new?assignees=&labels=new+feature&projects=&template=feature-request.yml "Request a feature.")
or [enhancement](https://github.com/anipalur/anipalur.com/issues/new?assignees=&labels=enhancement&projects=&template=enhancement-request.yml "Request an enhancement.")
using GitHub Issues.
See [SUPPORT.md](/.github/SUPPORT.md#feature-and-enhancement-requests "Learn more about feature and enhancement requests.")
for more information.

## Development Workflow

This project follows [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow "Learn more about GitHub flow.").
[Fork this repository](https://github.com/anipalur/anipalur.com/fork "Fork this repository."),
make your changes and [create a pull request][fork-pull-request-link] to submit your contribution.

## Code Review Process

When a new pull request is created, I will be requested for review.
Pull requests are only merged into the [`main`](https://github.com/anipalur/anipalur.com/tree/main "View the main branch.") branch
after I approve all changes and all checks pass.

I may not be available to respond to your pull request quickly due to time zone differences and other commitments, so please be patient.
If you do not receive a response within a week, please [contact me](https://anipalur.com/contact "Learn how to contact me.").

## Code Style

> [!NOTE]  
> If you are using [Visual Studio Code](https://code.visualstudio.com/download "Download Visual Studio Code."),
> some settings for code style (e.g. indentation) are applied from [settings.json](/.vscode/settings.json "View the settings.json file.").

### Markdown

[markdownlint](https://github.com/DavidAnson/markdownlint "Learn more about markdownlint.") is used to lint all Markdown files.  
Make sure to install the [markdownlint extension](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint "View the markdownlint extension.")
for Visual Studio Code!

markdownlint rules are specified in [.markdownlint.json](/.markdownlint.json "View the .markdownlint.json file.").
You may [disable markdownlint rules][markdownlint-disable-rules] for short segments of Markdown with reason.

Before creating a pull request, lint all Markdown files using the following command.

```shell
npm run lint
```

### YAML

[YAML Language Support](https://github.com/redhat-developer/vscode-yaml "Learn more about YAML Language Support.") is used to lint all YAML files.  
Make sure to install the [YAML Language Support extension](https://marketplace.visualstudio.com/items?itemName=redhat.vscode-yaml "View the YAML Language Support extension.")
for Visual Studio Code!

Before creating a pull request, format all YAML files using <kbd>SHIFT</kbd> + <kbd>ALT</kbd> + <kbd>F</kbd>.

### Naming Conventions

`kebab-case` should be used for variable, file and folder names unless the name is generated automatically.

### Comments

- Use comments only where necessary! Avoid redundant comments.  
- Comments should be used to *explain* code, not *describe* what it does.  
- A full stop (<kbd>.</kbd>) must be used at the end of a comment.
- To attribute code from an external source, include a comment at the start of the file using the following template.
  > Portions of this code have been adapted from the PROJECT_NAME project
  > and are copyrighted by PROJECT_AUTHOR, YEAR(S) under the terms of the LICENSE_TYPE license.

### Other Guidelines

- Wrap Markdown and YAML lines where appropriate (usually at the end of sentences or before conjunctions).
- Group related lines of code or text together.
- Use newlines to separate different groups of code or text.
- Prioritise readability over short code. Use descriptive variable names and methods.
- Pull out reusable code and links into separate functions.
- Try to maintain consistency with the rest of the project. If you are unsure about something, ask for help. 

## Commit Message Guidelines

Make sure to follow these [commit message guidelines](https://gist.github.com/robertpainsi/b632364184e70900af4ab688decf6f53 "View our commit message guidelines.")!

## Useful Resources

Here are some useful resources for development:

- Hugo resources:
  - [Hugo's documentation](https://gohugo.io/documentation "View Hugo's documentation.")
  - [Stack's documentation](https://stack.jimmycai.com "View Stack's documentation.")
  - [Hugo's support forum](https://discourse.gohugo.io "Visit Hugo's support forum.")
- Git and GitHub resources:
  - [GitHub Training Manual](https://githubtraining.github.io/training-manual/book.pdf "View the GitHub Training Manual.")
  - [Git Cheat Sheet](https://training.github.com/downloads/github-git-cheat-sheet.pdf "View the Git Cheat Sheet.")
  - [GitHub Flavoured Markdown][gfm-link]
  - [GitHub Skills](https://skills.github.com "Learn how to use GitHub with GitHub Skills courses.")
- Other resources:
  - [MDN's HTML documentation](https://developer.mozilla.org/en-US/docs/Web/HTML "View MDN's HTML documentation.")
  - [Stack Overflow](https://stackoverflow.com/questions/tagged/hugo "View Stack Overflow posts tagged with Hugo.")
  - [Go's documentation](https://go.dev/doc "View Go's documentation.")

## Tips

Here are some final tips to make your contribution more useful:

- **Ask for help!**  
  Do not be afraid to ask for help!
- **Before committing, make sure your idea has support.**  
  Get feedback on a potential patch or new feature before implementing it.
- **Focus on quality, not quantity.**  
  Focus on a few issues or pull requests at a time and see them through from start to end.
- **Respond to feedback!**  
  Do not be afraid to engage in a discussion.
- **Be patient.**  
  We are all human and have many commitments, so your contribution might not be reviewed quickly.

[new-feature]: https://github.com/anipalur/anipalur.com/issues?q=is%3Aopen+is%3Aissue+label%3Anew-feature "View all issues labelled as 'new-feature'."
[enhancement]: https://github.com/anipalur/anipalur.com/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement "View all issues labelled as 'enhancement'."
[file-bug-report]: https://github.com/anipalur/anipalur.com/issues/new?assignees=&labels=bug&projects=&template=bug-report.yml "File a bug report."

[markdownlint-disable-rules]: https://github.com/DavidAnson/markdownlint#:~:text=Rules%20can%20be%20enabled%2C%20disabled%2C%20and%20configured%20via%20options.config%20(described%20below)%20to%20define%20the%20expected%20behavior%20for%20a%20set%20of%20inputs. "Learn how to disable markdownlint rules."
[fork-pull-request-link]: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork "Learn how to create a pull request from a fork."
[gfm-link]: https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax "Learn more about writing Markdown on GitHub."
