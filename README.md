
> # The Startup Academy

## Table of Contents
- [Introduction](https://github.com/BOM-98/project_1#introduction)
- [Design Choices](https://github.com/BOM-98/project_1#design-choices)
    - [Colour Scheme](https://github.com/BOM-98/project_1#colour-scheme)
    - [Wire Frames](https://github.com/BOM-98/project_1#wire-frames)
    - [User Stories](https://github.com/BOM-98/project_1#user-stories)
    - [Sitemap](https://github.com/BOM-98/project_1#sitemap)
- [Features](https://github.com/BOM-98/project_1#features)
    - [Navigation Bar](https://github.com/BOM-98/project_1#navigation-bar)
    - [The Landing Page](https://github.com/BOM-98/project_1#the-landing-page)
    - [Toggle-Enabled Tab Content Section](https://github.com/BOM-98/project_1#toggle-enabled-tab-content-section)
    - [Mailing List Section](https://github.com/BOM-98/project_1#mailing-list-section)
    - [The Footer](https://github.com/BOM-98/project_1#the-footer)
    - [Blog Home Page](https://github.com/BOM-98/project_1#blog-home-page)
    - [Article Pages](https://github.com/BOM-98/project_1#article-pages)
    - [Sign Up Page](https://github.com/BOM-98/project_1#the-sign-up-page)
- [Features Left to Implement](https://github.com/BOM-98/project_1#features-left-to-implement)
- [Testing](https://github.com/BOM-98/project_1#testing)
    - [Validator Testing](https://github.com/BOM-98/project_1#validator-testing)
    - [Manual Testing](https://github.com/BOM-98/project_1#manual-testing)
- [Deployment](https://github.com/BOM-98/project_1#deployment)
- [Credits](https://github.com/BOM-98/project_1#credits)
    - [Content](https://github.com/BOM-98/project_1#content)
    - [Media](https://github.com/BOM-98/project_1#media)


## Introduction

The Startup Academy is a blog for guiding new founders on best practices for achieving product-market fit. The blog is targeted towards startup founders, particularly new founders in Dublin, Ireland. The goal of the website is to distill as much knowledge as possible into articles and present them in a logical order for founders to follow. If a founder is running a company that is already past some of the stages discussed in the blog, they can easily navigate and identify what the next problem area they should explore would be. 


![Header Image](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/responsive-images.png)
## Design Choices

### Colour Scheme

I chose this colour scheme keeping in mind the need for contrast between colours on the website for accessibility. The strong Red Violet primary colour is intended to be striking and attention grabbing relative to the Eerie black background and convey the symbol of risk and danger for a journey that many of these entrepreneurs will embark on, but gladly embrace.

As a point of note, some contrast checkers threw errors on the use of the Red Violet colour on the background of Eerie black. This was done very sparringly in the hero section, footer section and animated sections of forms to highlight one or two words or to underline active links. I made the choice, aesthetically speaking, to leave the colours as they were, as I believe they did not hider readability or accessiblity significantly enough to warrant changing them. The aesthetic outcome was prioritised in this case, as I believe there was still a significant enough contract for people to easily identify the words. The other elements surrounding the words had a strong contrast with the background and made it obvious that there was a word there.  

![Colour Palette](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/colour-pallette-image.png)

### Wire Frames
I created my wireframe using Balsamiq.

#### Home Page

The home page and Hero section was designed to provide a brief description of the Startup Academy with a call to action to sign up to the newsletter. In the implementation a secondary CTA button was added linking to the articles.

![Wireframe1](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/home-page.png)

#### Blog Page

The blog page outlined the basic structure that would be used by the 'Ideation', 'Customer Discovery' and 'Fundraising' articles. It featured a header image with the page content section directly below and a sticky side panel for navigating to different article headings. The side panel will disappear once the user scrolls to the contact section. The blog page is finished off with a contact section.  

![Wireframe2](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/blog-pages.png)

#### Contact Page

The contact page is purely intended to get users to get users to register for the website. An about page was going to be implemented underneath, highlighted in green, however this was not implemented as there isn't a set location for the website. 

![Wireframe3](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/contact-page.png)

#### Thank You Page

The thank you page is arrived at as soon as a user submits a form on the website. It features a main image followed by a 'back to home' button to ease navigation back to the home page. 

![Wireframe4](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/thank-you-page.png)

### User Stories

#### User Story 1: 

- As the creator of a startup in the ideation stage, I'm looking for tools and advice on how to improve my business idea so that I can lay a solid foundation for my startup.
- Scenario:
	- Entrepreneur John, 30, is looking for advice on how to develop and validate a new business idea.
	- He conducts an internet search for websites that provide startup founders with resources.
	- John visits the Ideation blog page after finding the Startup Academy website.
	- He discovers helpful tools and articles that assist him refine his business ideas into a more workable plan.

#### User Story 2: 

- In order to build a solution that truly satisfies the demands of my customers, I need resources on knowing my target market and validating my idea. I am a startup founder working on customer discovery.

- Scenario:
	- A 35-year-old company founder named Jane is focusing on finding customers for her fresh app concept.
	- She looks for information and tips online to help her understand her target market and validate her product.
Jane finds the Startup Academy website and goes to the blog page on customer discovery.
	- She discovers useful publications and tools that assist her in conducting efficient customer research and in honing her product offering.

#### User Story 3: 

- I'm a startup entrepreneur planning for fundraising, and I'm looking for information and advice on how to raise money so I may get the money I need to expand my company.

- Scenario:

	 - A 28-year-old company founder named Alex is getting ready to raise money for his enterprise.
	- He looks online for information and advice on startup fundraising.
	- Alex finds the Startup Academy website and visits the blog page for fundraising.
	- He discovers resources and articles that are instructive, which helps him comprehend the fundraising procedure and create an engaging pitch for investors.

#### User Story 4: 

- In order to continue learning and incorporating fresh perspectives into my firm, I want to stay up to date on the most recent advice and tools for creating a successful startup.

- Scenario:

	- Lisa, a 32-year-old startup founder, is constantly looking for fresh perspectives and tools to advance her company.
	- She finds the Startup Academy website and sees the subscription form.
	- To obtain regular information on new blog entries and resources, Lisa subscribes to the newsletter.
	- She gets routed to a thank you page after submitting the form, which confirms her subscription. She then starts getting helpful content from the Startup Academy in her mailbox on a regular basis.

### Sitemap

A sitemap was generated using [xml-sitemaps.com](https://www.xml-sitemaps.com/details-bom-98.github.io-4988e25b7.html). This was added to the root directory. 

Here is a general overview of the Sitemap: 

- 1. [Home](https://bom-98.github.io/project_1/)
- 2. Resources 
	- 2.1 [Ideation](https://bom-98.github.io/project_1/ideation.html) 
	- 2.2 [Customer Discovery](https://bom-98.github.io/project_1/customer_discovery.html)
	- 2.3 [Fundraising](https://bom-98.github.io/project_1/fundraising.html) 
	- 2.4 [Blog Home](https://bom-98.github.io/project_1/blog-home.html)
- 3. [Newsletter Signup](https://bom-98.github.io/project_1/newsletter_signup.html)
- 4. [Thank You](https://bom-98.github.io/project_1/thank_you.html)

To rank the website on Google Search, a Google HTML file was added to the root directory (/workspaces/project_1/googleb4228df491edf6c8.html). I did not rename this file to something shorter and more readable as I was concerned about Google's ability to identify the file and verify the site if I did. 

A visual skeleton of the website is shown in the below image.

![sitemap](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/site-map-project-1.png)

The sitemap was uploaded to Google Search Console to improve page ranking on Google search.

![Sitemap Upload](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/sitemap-submission-approval.png).

A sitemap HTML tag was also added to the root repository to enable Google to validate the site ownership. 

![Sitemap HTML Upload](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/sitemap-html-file.png)

## Features

The Startup Academy website features a dedicated homepage where founders can instantly navigate to all the relevant resources contained on the site. This includes a responsive navigation bar, a tab section where users can toggle between blog content to arrive at the area most relevant to them, a form to sign up to the newsletter, a thank you page for anyone who has submitted a form and three blog pages with content on Ideation, Customer Discovery and Fundraising.  

### ![Responsive Display](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/responsive-images.png)

- #### Navigation Bar
    
    -   Featured on all seven pages, the full responsive navigation bar includes links to the Logo, Home page, Blog Section and Contact page and is identical in each page to allow for easy navigation.
    -   This section will allow the user to easily navigate from page to page across all devices without having to revert back to the previous page via the ‘back’ button.
    - The navigation bar displays an active link to inform the user where they are currently on the website to assist navigation.
    - The navigation bar collapses into a burger menu on smaller devices to avoid excessive space being consumed by the navigation area.

 

![Nav Bar](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/nav-bar-image.png)

- #### **The landing page**
    
    -   The landing includes a photograph of the website mascot alongside text with relevant button links to inform the user of the website's purpose and provide easy navigation to further resources.
    -   This section introduces the user to The Startup Academy with a neomorphism style for the hero section to portray a more modern feel for the website and make it feel more relevant for tech founders in particular.

![Hero Section](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/hero-section-image.png)

-   #### **Toggle-Enabled Tab Content Section**
    
    -   The Tab content section will allow the user to see the topics currently covered in the website, and quickly navigate to the area most relevant to them.
    - The user can click on the different headings to see what blogs have been written under the topic and can then navigate directly to the individual pages for each article within those categories. 
    -   This user will see the wealth of knowledge available on the site, and this should encourage the user to consider registering for the newsletter to receive the content in an orderly fashion.
    - This section will continuously have more content added to it as the blog develops. 

![Toggle-Enabled Tab Content Section](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/tab-section-image.png)
![Toggle-Enabled Customer Discovery Section]()
![Toggle-Enabled Fundraising Section]()

-  #### **Mailing List Section**
    
    -   This section allows the user to register for the mailing list.
    -   The user is informed of the benefits of joining the mailing list, and the animated 'sign up' button attracts their attention to the call to action.
    - The input fields are marked with required properties to ensure that all relevant information is gathered.

[![Newsletter](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/newsletter-section-image.png)](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/newsletter-section-image.png)

-  #### **The Footer**
    
    -   The footer section includes links to the relevant pages for the Startup Academy, in addition to other notable websites relevant for startup founders. The external links will open to a new tab to allow easy navigation for the user.

[![Footer](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/footer-section-image.png)](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/footer-section-image.png)

-  #### **Blog Home Page**
    - Found on the blog-home.html file. 
    - The blog page will provide the user with a list preview to each blog on the site and links to reach the full article.
    -   This section is valuable to the user as they will be able to easily identify the types of content they want to read.
    - Each article is displayed with a corresponding image that alternates on the left or right depending on the order of the article in the list.

![Blog Home Section Top](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/blog-home-top-image.png)

-  #### **Article Pages**

	- Each article (Ideation, Customer Discovery, Fundraising) has its own dedicated article page
	- Each article features a banner section with an image and title to inform the user of which article they are on
	- There is a sticky side navigation with links to the relevant headings in the article to assist the user in arriving at the right sections of the article that they are interested in. The sticky navigation disappears at the end of the article to prevent it interfering with other sections.
	- Each article ends with a call to action signup form to further encourage users to join the newsletter.

![Article Top](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/customer-discovery-top-image.png)
![Artile Mid](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/customer-discovery-middle-section-image.png)

-  #### **The Sign Up Page**
    
    - Found on the contact.html file. 
    - This page will allow the user to get signed up to The Startup Academy newsletter to start their learning journey. The user will be asked to submit their Email Address, Full Name, Company and Job Title.

[![Sign Up](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/newsletter-section-image.png)](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/newsletter-section-image.png)

For some/all of your features, you may choose to reference the specific project files that implement them.

### Features Left to Implement

-   I would have liked to connect the newsletter forms to an actual mailing list to enable users to receive new content on a regular basis. This would involve creating a backend database and APIs to collect and store the user information, in addition to integrating with a mailing software suce as MailChimp in order to email new subscribers. 
-  I would like to make a full blog editor where I can quickly add new blog pages with the same layout and style without having to manually create a new page by writing HTML and CSS. This would involve creating an admin page where I could write new articles and publish them to the site. Information on how to do this is provided in the following [link](https://dev.to/themodernweb/fullstack-how-to-create-a-working-blogging-website-with-pure-html-css-and-js-in-2021-9di.).


## Testing

To ensure the site functions appropriately I conducted a number of tests. This includes HTML, CSS and Javascript testing. 

### Validator Testing

-   HTML
    -   No errors were returned when passing through the official  [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fbom-98.github.io%2Fproject_1%2Findex.html).
    ![W3Cvalidator](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/html-validator-check.png)
-   CSS
    -   No errors were found when passing through the official  [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbom-98.github.io%2Fproject_1%2Findex.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
    ![Jigsaw Validator](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/css-validator-check.png)
   - Page Performance
	   - Perfect 100% score across Performance, Accessibility, Best Practices & SEO on [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-bom-98-github-io-project_1/fjiqdvj3km?form_factor=desktop).
       Desktop
       ![PageSpeed Desktop](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/pagespeed-test-result.png)
       Mobile
       ![PageSpeed Mobile](https://github.com/BOM-98/project_1/blob/main/assets/images/README_images/pagespeed-test-result-mobile.png) 
### Manual Testing
    - For each new page implementation
        - every page link was checked to make sure they redirected to the correct source
        - every element was checked to make sure they were sized correctly and resized as expected with different screen dimensions
        - external links were checked to make sure they opened a new tab and directed to the correct source
        - forms were checked for defensive coding (field validation, error message for wrong input and mandatory fields) and correct submission redirects to the thank you page
        - compatibility tests were done for different browsers
    - I received additional manual testing help on the #peer-code-review channel to make sure all links and javascript functions worked as intended

## Deployment

-   The site was deployed to GitHub pages. The steps to deploy are as follows:
    -   Before deployment I edited my working directory using Visual Studio Code Remote Explorer. 
    - I added my files to the staging area using the 'git add .' command in the terminal
    - Once files were added to the staging area, I committed my files using 'git commit -m 'my message'.
    - Once my changes had been committed, I pushed the changes to the remote repository using 'git push' in the terminal. 
    - In the GitHub repository, navigate to the Settings tab
    -   From the source section drop-down menu, select the Master Branch
    -   Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found [here](https://bom-98.github.io/project_1/). 

## Credits

### Content

- Inspiration on the hero section and the layout of the blog pages was taken from [Interneting is Hard](https://internetingishard.netlify.app/index.html).  A lot of the design was customized and not copied, in particular the hero section, however the wireframe was initially inspired from the Interneting is Hard website design.
- General instructions on how to create a toggleable tab navigation section was taken from [W3 Schools](https://www.w3schools.com/howto/howto_js_tabs.asp). The general logic behind the code was learned from this site, but the implemented version was highly customized and altered to suit the site. 
-  How to structure and style the logic form was taken from [Coding Stella's Codepen](https://codepen.io/codingstella/pen/LYJKQxB). Small adjustments to the form inputs and colour were added to the style. 
- How to create a sticky aside was learned from [W3 Schools](https://www.w3schools.com/howto/howto_js_sticky_header.asp). I reverse engineered how the sticky navigation operated from that website and copied some of the element IDs - however the section was styled very differently and javascript logic was added with event listeners to ensure the side navigation disappeared once the user scrolled down far enough on the site. 
- The actual writing in the blogs were generated by [chat-gpt](https://chat.openai.com/) to produce some content that could be used in the pages.
- How to generally style the cards used in the blog home page was learned from [W3 Schools](https://www.w3schools.com/howto/howto_css_cards.asp). The general layout for the cards was drawn from here, however I had to use flexbox to reorganise the elements within the cards and completely change the design.
- The scroll to top indicator code was found in [W3schools](https://www.w3schools.com/howto/howto_js_scroll_to_top.asp). I took this code and javascript and adjusted the styling to fit the branding of the website. The javascript was also adjusted to move all scripts to app.js instead of having inline javascript.  
- The responsive website mockups were generated using [Am I Responsive](https://ui.dev/amiresponsive?url=https://bom-98.github.io/project_1/index.html).
- Adobe Illustrator was used to edit the .EPS documents created by [catalyststuff](https://www.freepik.com/author/catalyststuff).
- Visual Studio Code was the IDE used to create the website.
- I used [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), an extension within Visual Studio Code to visualise and test my website as I was creating it. 
- Colour scheme was displayed (not generated) using [Coolors](https://coolors.co/).
- Favicon created using [favicon.io](https://favicon.io/favicon-converter/).
- Wireframes were created using [Balsamiq](https://balsamiq.com/). 

### Media

 -   The images used throughout the website were sourced from Freepik, specifically the author [catalyststuff](https://www.freepik.com/author/catalyststuff).
-   The logo was generated using [Tailor Brands](https://studio.tailorbrands.com/).

I would like to thank my Mentor [CluelessBiker](https://github.com/CluelessBiker) for all of her help in getting this project live. She has contributed so much through her advice in making sure this website was free of bugs and met the requirements of the course. 