# Agile Practice: Spring + JAWR + Ext3 Practice

[![Build Status](https://travis-ci.org/Aquariuslt/spring-jawr-ext.svg?branch=master)](https://travis-ci.org/Aquariuslt/spring-jawr-ext)
[![Coverage Status](https://coveralls.io/repos/github/Aquariuslt/spring-jawr-ext/badge.svg?branch=master)](https://coveralls.io/github/Aquariuslt/spring-jawr-ext?branch=master)


The focus point is: How to write graceful javascript unittest in server render template engine.


## Background
- Spring Framework 
- Spring MVC
- JAWR
- JAWR Locale Message Generator
- Ext3

## Features
- Karma + Mocha + Chai
- Sinon
- Integration with CI System

## Problems
- **How to load necessary JS files into runtime easily?** Because Java side uses JAWR as assets bundling tool to compact multiple JS files into one. Then Front-end uses `<script>` tags to include those bundles. This make it difficult to get the correct dependencies JS files.
- **How to mock the Locale Message Generator in global?** Currently the JAWR Locale Message Generator is assigned as a property of the global object(We use it like `docmessages.blc.field.bl('Hello')`). We need to construct this object when running test cases otherwise a lot of code will throw exception.
- **No best practice for Ext3 can be found from Internet**

## Plan: outline


## Usage

### Install Dependencies
```bash
$ mvn clean install && npm install
```

### Build War & Deploy
You can deploy you war file in `target/agile-pratice.war` to your webapp container.(Tomcat, JBoss, Weblogic...)

### Install Frontend UnitTest Dependencies
```bash
$ npm install
```

> For China User, since `puppeteer v0.13.0` support CHROMIUM binary download mirror
> Please export environment variables `PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org` before npm install
> For Windows Run `SET PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org`
> For Unix Run `export PUPPETEER_DOWNLOAD_HOST=https://storage.googleapis.com.cnpmjs.org`

### Frontend UnitTest
```bash
$ npm test
```



