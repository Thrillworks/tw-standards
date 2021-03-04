---
title: 'Internationalization'
dateUpdated: '27-02-2021'
summary: 'About i18n'
chapter: '8'
---
# 8. Internationalization
1. ##  Internationalize Early
	Consider doing internationalization early. This is often easier than doing it later.
2. ## Avoid English (Static Text)
	When not doing proper internationalization, avoid putting a lot of English text in the code, since that will make internationalization harder later. Put such text in configuration files from the outset.
3. ## Use Tools
	There are multiple tools for every platform we touch. Below is a list of the standard libraries we use across project types:- React: [react-intl](https://www.npmjs.com/package/react-intl) - Gatsby: [react-intl](https://www.npmjs.com/package/react-intl) - .NET: ::Please Contribute::
4. ## Not Just Words
	Monetary values, time and date values all have region and language specific formats, use the tools above when implementing any of these types of data to format the output based on language or region.