const ARTICLES = [
  { title: 'START HERE: The Alvéya™ Quick Start Setup Checklist', category: 'Getting Started', cat: 'getting-started', slug: 'start-here', excerpt: 'Welcome to Alvéya™ knowledge base your all-in-one system for running a thriving health practice or service-based busines' },
  { title: 'Add Your Business Details in Alvéya™', category: 'Getting Started', cat: 'getting-started', slug: 'add-business-details-in-alveya', excerpt: 'Adding your business details is an important first step. These details flow through to your emails, invoices, booking pa' },
  { title: 'Connect Your Domain to Alvéya™', category: 'Getting Started', cat: 'getting-started', slug: 'connect-your-domain-to-alveya', excerpt: 'Your domain is your online address — it’s how clients find and trust you. Connecting your custom domain to Alvéya™ means' },
  { title: 'Update Your DNS Records (by Domain Provider)', category: 'Getting Started', cat: 'getting-started', slug: 'update-your-dns-records-by-domain-provider', excerpt: 'When you connect your domain to Alvéya™, you’ll need to update something called your DNS records . This tells the intern' },
  { title: 'How to Set Up Email & SMS Sending in Alvéya™', category: 'Email Marketing', cat: 'email-marketing', slug: 'how-to-set-up-email-sms-sending-in-alveya', excerpt: 'Alvéya™ lets you send emails and SMS directly from your account so you can confirm bookings, deliver resources, and stay' },
  { title: 'Set Up Your Booking Calendar in Alvéya™', category: 'Getting Started', cat: 'getting-started', slug: 'booking-calendar-setup', excerpt: 'https://youtu.be/nvd_Gi_29Do Written Instructions 1. Access Calendar Settings Navigate to the ‘Calendars’ section. Click' },
  { title: 'Create a Service Menu in Alvéya™', category: 'Getting Started', cat: 'getting-started', slug: 'create-a-service-menu-in-alveya', excerpt: 'A Service Menu lets you display multiple services (calendars) in one booking page, so clients can choose the appointment' },
  { title: 'Embed Your Calendar or Service Menu on a Website in Alvéya™', category: 'Getting Started', cat: 'getting-started', slug: 'embed-your-calendar-or-service-menu-on-a-website-in-alveya', excerpt: 'Once your calendars are set up, you can make them bookable directly from your website. Depending on your setup, you can ' },
  { title: 'Automate Appointment Reminders in Alvéya™', category: 'Automations', cat: 'automations', slug: 'appointment-reminders', excerpt: 'Automated appointment reminders help reduce no-shows and make client communication seamless. In Alvéya™, reminders are m' },
  { title: 'Create an email template', category: 'Getting Started', cat: 'getting-started', slug: 'create-an-email-template', excerpt: 'Creating your own email templates in Alvéya™ helps you save time and keep your communications consistent across automati' },
  { title: 'Create your brand identity board', category: 'Email Marketing', cat: 'email-marketing', slug: 'create-your-brand-identity-board', excerpt: 'Your Brand Board is where you keep your business visuals consistent across emails, funnels, and website pages. It stores' },
  { title: 'Create a Countdown Timer in Alvéya™', category: 'Email Marketing', cat: 'email-marketing', slug: 'countdown-timer', excerpt: 'Countdown timers help build anticipation and encourage action — whether you’re promoting an event, a special offer, or a' },
  { title: 'Set Up an Online Store in Alvéya™', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'set-up-an-online-store-in-alveya', excerpt: 'Your Alvéya™ Online Store lets you sell products and services directly from your website — from professional offerings t' },
  { title: 'Onboarding with Alvéya™', category: 'Getting Started', cat: 'getting-started', slug: 'onboarding', excerpt: 'Search Search Welcome to Alvéya™ knowledge base your all-in-one system for running a thriving health practice or service' },
  { title: 'Create a Marketing Email in Alvéya™', category: 'Email Marketing', cat: 'email-marketing', slug: 'set-up-an-online-store-in-alveya-duplicate', excerpt: 'Alvéya makes it easy to create and send professional marketing emails using built-in templates and a visual email builde' },
  { title: 'Instagram Comment Automation (Similar to ManyChat)', category: 'Automations', cat: 'automations', slug: 'instagram-comment-automation', excerpt: 'This guide walks you through connecting your Facebook and Instagram accounts to Alvéya and activating comment and direct' },
  { title: 'Website and Page Settings', category: 'Getting Started', cat: 'getting-started', slug: 'website-page-settings', excerpt: 'Website Settings This tutorial walks through the main settings that apply at a website level in Alvéya. These settings c' },
  { title: 'Setting up the client portal domain name', category: 'Getting Started', cat: 'getting-started', slug: 'client-portal-domain-name', excerpt: 'Setting up the client portal domain name This video walks you through the simple process of setting up your client porta' },
  { title: 'Websites Playbook', category: 'Getting Started', cat: 'getting-started', slug: 'websites-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ Your website is your digital foundation. It is where clients learn about your service' },
  { title: 'Social Planner Playbook', category: 'Getting Started', cat: 'getting-started', slug: 'social-planner-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ Social Planner helps you plan, schedule, and publish content from one place, without ' },
  { title: 'Funnels & Landing Pages Playbook', category: 'Getting Started', cat: 'getting-started', slug: 'funnels-landing-pages-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ Funnels and landing pages are designed to guide visitors toward a specific action. Wh' },
  { title: 'Customise your Social Planner Settings', category: 'Automations', cat: 'automations', slug: 'customise-your-social-planner-settings', excerpt: 'Manage connections, permissions, notifications and branding for your social content. The Social Planner Settings area al' },
  { title: 'Domains Playbook', category: 'Getting Started', cat: 'getting-started', slug: 'domains-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ Your domain setup is the foundation of your entire digital ecosystem. Inside Alvéya™,' },
  { title: 'CRM Playbook', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'crm-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ Your CRM is the operational heart of Alvéya. It stores every contact, tracks every in' },
  { title: 'Tags & Smart Lists', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'tags-smart-lists', excerpt: 'Organise, segment and automate your CRM with precision. This guide is ideal if you want to: Organise your contacts using' },
  { title: 'How to Add a Favicon to Your Website, Funnel or Client Portal', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-add-a-favicon-to-your-website-funnel-or-client-portal', excerpt: 'https://youtu.be/EVqjnvk0jS0 Written Instructions: Link to canva template for a favicon Step 1: Understand the Purpose o' },
  { title: 'Building a Website with Sections, Rows, and Columns', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'building-a-website-with-sections-rows-and-columns', excerpt: 'https://youtu.be/0CJly52qtXM This guide outlines the steps to create a section in Alvéya\'s website builder, including ad' },
  { title: 'Troubleshooting domain connections', category: 'Getting Started', cat: 'getting-started', slug: 'troubleshooting-domain-connections', excerpt: 'Here are the common causes for domain incompatibility and how to fix them: 1. Incompatible DNS Setup (Most Common)  Dupl' },
  { title: 'How to Add a Subdomain to a Funnel, portal or course', category: 'Getting Started', cat: 'getting-started', slug: 'how-to-add-a-subdomain-to-a-funnel-portal-or-course', excerpt: 'Connecting a subdomain to your funnel allows you to create a clean, branded URL for your landing pages even if you have ' },
  { title: 'Should you reroute your domain through Cloudflare for ease?', category: 'Getting Started', cat: 'getting-started', slug: 'should-you-reroute-your-domain-through-cloudflare-for-ease', excerpt: 'Alvéya can automatically add your domain records to Cloudlfare rather than moving them manually yourself. If you are ok ' },
  { title: 'Setting Up Email Sending with a Dedicated Domain', category: 'Email Marketing', cat: 'email-marketing', slug: 'setting-up-email-sending-with-a-dedicated-domain', excerpt: 'Setting Up Email Sending in Alvéya 1. Access Email Services Settings Navigate to the bottom of your account settings. Cl' },
  { title: 'How funnels work within Alvéya', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-funnels-work-within-alveya', excerpt: 'In this video, I walk you through how to use the Funnels feature in Alvear, whether you have a website with us or extern' },
  { title: 'Automations for membership and courses', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'automations-for-membership-and-courses', excerpt: 'Remove user when there is a failed payment (Video Coming) When running memberships or subscription-based offers, it’s im' },
  { title: 'Webinar Registration confirmation & reminder workflow', category: 'Automations', cat: 'automations', slug: 'webinar-registration-confirmation-reminder-workflow', excerpt: 'Setting Up Your Webinar Funnel Automation 1. Access Automation Templates Navigate to the Automation section in your Alve' },
  { title: 'How to create a contact form', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-create-a-contact-form', excerpt: 'A contact form is a crucial tool for collecting leads, inquiries, and customer feedback. Alvéya makes it easy to create,' },
  { title: 'Where Do Form Responses Show Up?', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'where-do-form-responses-show-up', excerpt: 'Forms will help you capture information about contacts that fill out and submit the form. In order to view this informat' },
  { title: 'Email notification in Forms & Surveys', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'email-notification-in-forms-surveys', excerpt: 'Email Notifications in Forms & Surveys offer a convenient way to stay updated on form submissions without the need for m' },
  { title: 'Embedding Alvéya Forms on Non-Alvéya Websites', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'embedding-alveya-forms-on-non-alveya-websites', excerpt: 'What is Embedding of Alvéya Forms Embedding Alvéya forms means integrating a form from Alvéya directly onto your website' },
  { title: 'How to make my form submissions secure from spammers?', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-make-my-form-submissions-secure-from-spammers', excerpt: 'How to secure your forms? Our forms product includes built-in protections against fake submissions, leveraging multiple ' },
  { title: 'Rating Element for Forms, Surveys & Quizzes', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'rating-element-for-forms-surveys-quizzes', excerpt: 'Easily collect feedback and gauge sentiment with the new Rating Element for Alvéya Forms, Surveys, and Quizzes. This fea' },
  { title: 'Add a user to your Alvéya account', category: 'Account & Billing', cat: 'account-billing', slug: 'add-a-user-to-your-alveya-account', excerpt: 'Go to Settings , My staff, Click Add User Add their personal details, Next Roles & Permissions: Admin: full access to al' },
  { title: 'How to Set Up an Email Signature in Alvéya™', category: 'Email Marketing', cat: 'email-marketing', slug: 'how-to-set-up-an-email-signature-in-alveya', excerpt: 'Email signatures help keep your outbound emails consistent and professional. Each team member in your Alvéya account can' },
  { title: 'Setting up your Client Portal', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'setting-up-client-portal', excerpt: 'This article is step one from the Client Portal playbook. To continue the process of setting up your community after thi' },
  { title: 'Connecting a subdomain to your client portal', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'connecting-a-subdomain-to-your-client-portal', excerpt: 'https://youtu.be/Puv5vMnjtEc Connecting a subdomain to your client portal allows you to create a clean, branded URL for ' },
  { title: 'Inviting Users to the Client Portal', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'inviting-users-to-the-client-portal', excerpt: 'Once your client portal is set up, the next step is inviting your clients or audience to access it. There are a few diff' },
  { title: 'How to Cancel Your Alvéya™ Subscription', category: 'Account & Billing', cat: 'account-billing', slug: 'how-to-cancel-your-alveya-subscription', excerpt: 'We understand that sometimes your needs change, and you may be considering cancelling your Alvéya subscription. Before y' },
  { title: 'Create and manage physical and digital products', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'create-and-manage-physical-and-digital-products', excerpt: 'https://youtu.be/49lm1ZgP8oQ Read written instructions here Key Steps 1. Accessing the Products Page Navigate to the ‘Pa' },
  { title: 'How to Make Products Available', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-make-products-available', excerpt: 'Once you have created your product inside Alvéya, the next step is making it available for purchase. Creating a product ' },
  { title: 'Customising Individual Communities: Colours & Settings', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'customising-communities', excerpt: 'Within Alvéya, you can customise the look of each community group.Each community can have a unique appearance aligned wi' },
  { title: 'Add a Course to Your Community or portal', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'add-a-course-to-your-community-or-portal', excerpt: 'Adding your course to the client portal allows you to: • Deliver content in one organised space • Control access based o' },
  { title: 'Customise the course theme', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'customise-the-course-theme', excerpt: 'Navigate to the \"Customise\" option in your Course Outline. Click on \" Browse System Templates \". You can choose from any' },
  { title: 'Communities Playbook', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'communities-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ The Communities feature allows you to bring your clients, members or audience into on' },
  { title: 'Create a community in Alvéya', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'create-a-community-in-alveya', excerpt: 'This article is step one from the Communities playbook. To continue the process of setting up your community after this ' },
  { title: 'Inviting members and setting up user roles', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'inviting-members-and-setting-up-user-roles', excerpt: 'This article is step one from the Communities playbook. To continue the process of setting up your community after this ' },
  { title: 'How to Share Documents Through the Client Portal', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-share-documents-through-the-client-portal', excerpt: 'This article is step one from the Client portal playbook. To continue the process of setting up your Client portal after' },
  { title: 'How to Import Contacts from Another Email Campaign Platform', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'import-contacts', excerpt: 'What You\'ll Need Your contact list exported as a CSV file (Excel spreadsheet in CSV format) from your previous email pla' },
  { title: 'How to Connect Your Email to Alvéya (Two-Way Email Sync)', category: 'Email Marketing', cat: 'email-marketing', slug: 'how-to-connect-your-email-to-alveya-two-way-email-sync', excerpt: 'What this does: When you connect your Gmail or Outlook to Alvéya, your emails will automatically appear in both places —' },
  { title: 'Connecting Instagram and Facebook for Automations', category: 'Integrations', cat: 'integrations', slug: 'connecting-instagram-and-facebook-for-automations', excerpt: 'This guide outlines the steps to connect your Instagram and Facebook accounts using Lead Connector for automation purpos' },
  { title: 'Instagram ↔ Alvéya Troubleshooting', category: 'Integrations', cat: 'integrations', slug: 'instagram---alveya-troubleshooting', excerpt: '1. Account Type Issues Make sure your Instagram account is set to Business or Creator — not a personal profile. If it\'s ' },
  { title: 'Setting Up Your Dedicated Email Sending Domain', category: 'Email Marketing', cat: 'email-marketing', slug: 'setting-up-your-dedicated-email-sending-domain', excerpt: 'This article is step one from the Domains playbook. To continue the process of setting up your community after this step' },
  { title: 'Domain setup for client portal/courses & funnels', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'domainr-client-portal-courses-funnels', excerpt: 'This article is step one from the Domains playbook. To continue the process of setting up your domains after this step, ' },
  { title: 'Branded Domain for system links & forms', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'branded-domain-for-system-links-forms', excerpt: 'This article is step one from the Domains playbook. To continue the process of setting up your domains after this step, ' },
  { title: 'Start to finish tutorial to create an opt in funnel', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'optin-funnel', excerpt: 'This article is step one from the Funnel Playbook. To continue the process of setting up your funnel after this step, he' },
  { title: 'Configuring Your Funnel Settings', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'configuring-funnel-settings', excerpt: 'This article is a step from the Funnels & Landing Page Playbook. To continue the process of setting up your funnel after' },
  { title: 'Nurture & Grow Blueprint | Opt In Email Nurture Series', category: 'Email Marketing', cat: 'email-marketing', slug: 'nurture-grow-blueprint-opt-in-email-nurture-series', excerpt: 'This forms part of our Opt In Funnel Playbook - If you wouldlike to learn about all steps including the funnel page set ' },
  { title: 'Add channels to your community', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'community-channels', excerpt: 'Channels are the topic-based spaces within your community where members can post, discuss, and engage. Your community co' },
  { title: 'Email notifications for communities', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'email-notifications-for-communities', excerpt: 'Alvéya Communities include a comprehensive set of automated email notifications that keep your members informed and your' },
  { title: 'Going Live in Your Alvéya Community', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'going-live-in-your-alveya-community', excerpt: 'Alvéya Communities include a built-in live streaming feature that lets you host real-time sessions directly inside your ' },
  { title: 'Scheduling Posts to Your Community Groups', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'scheduling-posts-to-your-community-groups', excerpt: 'Alvéya\'s Social Planner connects directly to your community groups, allowing you to plan, schedule, and automate posts i' },
  { title: 'Client Portal Notification Settings', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'client-portal-notification-settings', excerpt: 'The Alvéya Client Portal consolidates all notifications from your portal and its connected areas — including communities' },
  { title: 'Editing and Customising Text, Images and Spacing', category: 'Website Templates', cat: 'website-templates', slug: 'text-images-and-spacing', excerpt: 'This article is a step from the Playbook. To continue the process of setting up your Website after this step, head back ' },
  { title: 'Customising colours, fonts and buttons', category: 'Website Templates', cat: 'website-templates', slug: 'customising-colours-fonts-and-buttons', excerpt: 'This article is a step from the Playbook. To continue the process of setting up your Website after this step, head back ' },
  { title: 'Connect your domain to the website or funnel', category: 'Website Templates', cat: 'website-templates', slug: 'website-funnel-root-domain-setup', excerpt: 'This article is step one from the Domains playbook. To continue the process of setting up your domains after this step, ' },
  { title: 'Setting Up a Checkout Page for a Paid Offer', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'setting-up-a-checkout-page-for-a-paid-offer', excerpt: 'This guide walks you through connecting a paid offer to a checkout page in Alvéya — from creating the offer in the right' },
  { title: 'Syncing External Calendars with Alvéya', category: 'Integrations', cat: 'integrations', slug: 'syncing-external-calendars-with-alveya', excerpt: 'This article is a step from the Playbook. To continue the process of setting up your Calendars after this step, head bac' },
  { title: 'Calendar Playbook', category: 'Getting Started', cat: 'getting-started', slug: 'calendar-playbook', excerpt: 'A Complete Setup Guide for Alvéya™ What You’ll Complete in This Guide • Enable your Client Portal and Communities featur' },
  { title: 'Connecting Video Conferencing to Your Calendars', category: 'Integrations', cat: 'integrations', slug: 'connecting-video-conferencing-to-your-calendars', excerpt: 'This article is a step from the Playbook. To continue the process of setting up your Calendars after this step, head bac' },
  { title: 'Connecting ThriveCart to Alvéya', category: 'Integrations', cat: 'integrations', slug: 'connecting-thrivecart-to-alveya', excerpt: 'ThriveCart doesn\'t have a built-in integration with Alvéya — but that doesn\'t mean you have to handle it manually. This ' },
  { title: 'Automatically Post Blog Content to Facebook and Instagram', category: 'Automations', cat: 'automations', slug: 'automatically-post-blog-content-to-facebook-and-instagram', excerpt: 'Every time you publish a new blog post, Alvéya can automatically share it to your Facebook and Instagram — no manual pos' },
  { title: 'Tagging a Contact When a Form Is Submitted', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'tagging-a-contact-when-a-form-is-submitted', excerpt: 'Every time someone fills in a form in Alvéya, you have the opportunity to automatically label them based on what they ju' },
  { title: 'How to Review Course Participation and Progress', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-review-course-participation-and-progress', excerpt: 'Knowing how your students are progressing through your courses helps you spot where people are getting stuck, who might ' },
  { title: 'How to Get Notified When Someone Signs Up', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-get-notified-when-someone-signs-up', excerpt: 'Rather than manually checking your enrolments, you can set up Alvéya to send you (or your team) an automatic notificatio' },
  { title: 'How to Re-Send Login Links or Reset a Password', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-re-send-login-links-or-reset-a-password', excerpt: 'If a student can\'t get into their course — whether they\'ve forgotten their password or never received their login detail' },
  { title: 'How to Remove a Student\'s Course Access', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-remove-a-students-course-access', excerpt: 'There may be situations where you need to manually revoke a student\'s access to a course — for example, if their subscri' },
  { title: 'How to Cancel a Student\'s Subscription', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-cancel-a-students-subscription', excerpt: 'If a student has asked you to cancel their subscription, or if you need to end it manually for any reason, you can do th' },
  { title: 'Handling Failed Payments and Revoking Course Access', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-to-remove-course-and-or-communnity-access-when-a-subscription-is-cancelled', excerpt: 'When a subscription payment fails, the way you respond matters — both for your cash flow and for your client relationshi' },
  { title: 'Courses | Frequently Asked Questions', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'courses-frequently-asked-questions', excerpt: '▸  Can I assign a student to multiple courses at once? Yes. When manually granting access or using a workflow, you can i' },
  { title: 'How Your Clients Manage Their Own Subscriptions', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'how-your-clients-manage-their-own-subscriptions', excerpt: 'A walkthrough of everything your clients can see and do inside the Alvéya client portal — from viewing subscriptions and' },
  { title: 'Setting a Default Greeting for Contacts Without a Name', category: 'Email Marketing', cat: 'email-marketing', slug: 'setting-a-default-greeting-for-contacts-without-a-name', excerpt: 'When a contact is imported with only an email address and no first name on file, your email greeting can end up reading ' },
  { title: 'Methods to Manually Add Contacts to Workflows', category: 'Automations', cat: 'automations', slug: 'methods-to-manually-add-contacts-to-workflows', excerpt: 'From Contacts SmartList (Bulk or Individual): Go to Contacts > SmartLists . Check the tick box next to the contact(s) yo' },
  { title: 'Connecting SimpleClinic to Alvéya (via mailchimp or mailerlite)', category: 'Integrations', cat: 'integrations', slug: 'connecting-simpleclinic-to-alveya-via-mailchimp-or-mailerlite', excerpt: 'SimpleClinic does not have a native integration with Alvéya — but you can still get your patients flowing in automatical' },
  { title: 'Using Pre-Built Segments in Email Campaigns', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'built-segments-in-email-campaigns', excerpt: 'Not every contact on your list is at the same stage — and sending the same email to everyone rarely gets the best result' },
  { title: 'Setting Your Default Reply Email Address', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'setting-your-default-reply-email-address', excerpt: 'When a client replies to one of your emails, where does that reply go? By default it comes into your Conversations tab —' },
  { title: 'Interactive Course Setup Workflow', category: 'Courses & Funnels', cat: 'courses-funnels', slug: 'interactive-course-setup-workflow', excerpt: 'Alvéya — Course Funnel Workflow @import url(\'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=D' },
  { title: 'Manually adding a contact to a workflow', category: 'Automations', cat: 'automations', slug: 'how-to-send-a-workflow-to-your-existing-contacts', excerpt: 'Once your automation workflow is set up and published, you can send it to any contacts already in your Alvéya account — ' },
  { title: 'Can I Send Email Campaigns from My Gmail Address?', category: 'Email Marketing', cat: 'email-marketing', slug: 'can-i-send-email-campaigns-from-my-gmail-address', excerpt: 'If you have been using a personal Gmail address as your main business email, you will need to set up a domain-based emai' },
  { title: 'Setting your branding for the system generated emails', category: 'Email Marketing', cat: 'email-marketing', slug: 'setting-your-branding-for-the-system-generated-emails', excerpt: 'Before you start:  Have your logo file ready to upload, and your brand hex colour codes on hand. You will need a primary' },
  { title: 'Merging Smart Lists', category: 'CRM & Contacts', cat: 'crm-contacts', slug: 'merging-smart-lists', excerpt: 'If you\'ve built separate Smart Lists and want to consolidate them, there are two ways to go about it. Choose the approac' }
];

// ── DOM refs ─────────────────────────────────────────────────
const input   = document.getElementById('search-input');
const results = document.getElementById('search-results');
const box     = input.closest('.search-box');

// Inject clear button
const clearBtn = document.createElement('button');
clearBtn.className = 'search-clear';
clearBtn.setAttribute('aria-label', 'Clear search');
clearBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="4" x2="12" y2="12"/><line x1="12" y1="4" x2="4" y2="12"/></svg>`;
clearBtn.style.display = 'none';
box.appendChild(clearBtn);

// ── Logic ─────────────────────────────────────────────────────
function search(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return ARTICLES.filter(a =>
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q)
  ).slice(0, 6);
}

function highlight(text, query) {
  const q = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!q) return text;
  return text.replace(new RegExp(`(${q})`, 'gi'), '<mark>$1</mark>');
}

function render(query) {
  const hits = search(query);
  if (!query.trim()) {
    results.innerHTML = '';
    results.classList.remove('open');
    return;
  }
  if (hits.length === 0) {
    results.innerHTML = `<p class="search-no-results">No results for "<strong>${query}</strong>" — try a different term.</p>`;
    results.classList.add('open');
    return;
  }
  results.innerHTML = hits.map(a => `
    <div class="search-result-item" role="option" tabindex="0" data-cat="${a.cat}" data-slug="${a.slug || ''}">
      <span class="result-cat-badge">${a.category}</span>
      <div class="result-text">
        <p class="result-title">${highlight(a.title, query)}</p>
        <p class="result-excerpt">${highlight(a.excerpt, query)}</p>
      </div>
    </div>
  `).join('');
  results.classList.add('open');

  results.querySelectorAll('.search-result-item').forEach(el => {
    el.addEventListener('click', () => {
      window.location.href = el.dataset.slug ? `articles/${el.dataset.slug}.html` : `category.html#${el.dataset.cat}`;
    });
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter') window.location.href = el.dataset.slug ? `articles/${el.dataset.slug}.html` : `category.html#${el.dataset.cat}`;
    });
  });
}

// ── Events ────────────────────────────────────────────────────
let debounce;
input.addEventListener('input', () => {
  clearTimeout(debounce);
  clearBtn.style.display = input.value ? 'flex' : 'none';
  debounce = setTimeout(() => render(input.value), 160);
});

clearBtn.addEventListener('click', () => {
  input.value = '';
  clearBtn.style.display = 'none';
  results.innerHTML = '';
  results.classList.remove('open');
  input.focus();
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) {
    results.classList.remove('open');
  }
});

input.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    results.classList.remove('open');
    input.blur();
  }
});

// Add highlight style
const style = document.createElement('style');
style.textContent = `mark { background: rgba(138,170,126,0.3); color: inherit; border-radius: 2px; padding: 0 1px; }`;
document.head.appendChild(style);
