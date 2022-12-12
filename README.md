<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/MaximilianHeidenreich/SweetForms">
    <img src="https://deno.land/logo.svg" alt="SweetForms logo" width="80" height="80">
  </a>

<h2 align="center">SweetForms</h2>

<p align="center">
    A simple tool an UI for collecting form submissions running on Deta.sh Spaces private cloud.</a>.
    <br />
    <a href="https://doc.deno.land/https/deno.land/x/dsddb/mod.ts"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/MaximilianHeidenreich/SweetForms/issues">Report Bug</a>
    ·
    <a href="https://github.com/MaximilianHeidenreich/SweetForms/issues">Request Feature</a>
  </p>
</p>

<br><br>

<!-- ABOUT THE PROJECT -->

## About The Project

Todo: Write

### Project Goals

#### Basic Features
- [x] One-Click installation & running in Deta.sh private cloud
- [x] Support for collecting basic HTML forms
- [ ] Support for custom redirect URL after submission
  - [ ] Instant redirect
  - [ ] Optional "Thankyou" page with manual redirection

#### Advanced Features
- [ ] Captcha support
- [ ] Support for collecting specific data types
- [ ] Collect submissions through API

<br>

### Terminology

#### Modes
1. Flexible Mode
   - No external integrations required -> just set the form endpoint and fields to collect
   - -> No spam protection
2. Strict Mode
   - 1 additional javascript file has to be inluded on form page
   - option to use captcha

<!-- INSTALLATION -->

## Installation

todo

# Roadmap
- Redirect url
  - Instant redirect OR
  - Thankyou message + redirect button
- Customizable "collect_" form field prefix
- Captcha support / anti spam
- Rate limiting
- typed collect? -> Numbers 
- Can we limit domains to collect from? cors?