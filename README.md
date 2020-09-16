[![Build status](https://img.shields.io/github/workflow/status/kaskadi/template-action/build?label=build&logo=mocha)](https://github.com/kaskadi/template-action/actions?query=workflow%3Abuild)

**CodeClimate**

[![](https://img.shields.io/codeclimate/maintainability/kaskadi/template-action?label=maintainability&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-action)
[![](https://img.shields.io/codeclimate/tech-debt/kaskadi/template-action?label=technical%20debt&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-action)
[![](https://img.shields.io/codeclimate/coverage/kaskadi/template-action?label=test%20coverage&logo=Code%20Climate)](https://codeclimate.com/github/kaskadi/template-action)

**LGTM**

[![](https://img.shields.io/lgtm/grade/javascript/github/kaskadi/template-action?label=code%20quality&logo=lgtm)](https://lgtm.com/projects/g/kaskadi/template-action/?mode=list)

****

# Testing

`mocha`, `chai`, `nyc` & `standard` are available as dev dependencies.

A `build` workflow (see [here](./.github/workflows/build.yml)) is running on `pull request` and will execute your test suite before allowing you to merge your PR. It also has a `coverage` job already prepared that you can comment out as soon as your testing is in place and your `REPORTER_ID` is in the repository secrets. This is the ID on _Code Climate_ used for uploading code coverage reports.

****

# Documentation

This repository comes with a `generate-docs` workflow that generates documentation automatically for you based on your `action.yml`. See [here](https://github.com/kaskadi/action-generate-docs) and [there](./action.yml) for more information.

If you would like to see the workflow configuration, head [here](./.github/workflows/generate-docs.yml).

You can configure the template used to generate the action documentation [here](./docs/template.md)

****

<!-- automatically generated documentation will be placed here -->
# What is this action for?

template repository to create GitHub Actions

# How to use it?

You can use the following code as a new _GitHub Actions Workflow_:

```yaml
name: {YOUR-ACTION-NAME}
on: [{YOUR-ACTION-EVENT}]
jobs:
  {YOUR-JOB-NAME}:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: {YOUR-STEP-NAME}
      uses: kaskadi/template-action@master
      with:
        input_1: {INPUT_1-VALUE}
      env:
        env_1: {ENV_1-VALUE}
```

**Note:** everything contained in single curly brackets (`{ }`) needs to be replaced by your desired values

**Inputs:**
|   Input   | Required |  Default  | Description      |
| :-------: | :------: | :-------: | :--------------- |
| `input_1` |  `false` | `default` | This is an input |

**Outputs:**
|   Output   | Description       |
| :--------: | :---------------- |
| `output_1` | This is an output |

**Environment variables:**
| Variable | Required | Description                     |
| :------: | :------: | :------------------------------ |
|  `env_1` |  `true`  | This is an environment variable |

<!-- automatically generated documentation will be placed here -->
:point_down: **Here goes any extra details on how to use the action** :point_down: