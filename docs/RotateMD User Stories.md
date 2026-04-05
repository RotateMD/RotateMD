RotateMD Roadmap
Phase 1: Acquire/interest users
Landing Page
Waitlist
Signup/Login
Email Verification

Phase 2: Create basic functionality
Basic profile
Add first rotation

Phase 3: Browsing Experience
Browse results
Filters

Phase 4: Let users connect
Connect button
Contact sharing

Phase 5: $$$?
Optional premium to boost account, premium filters, unlimited reach-outs
Affiliate links
B2B partnership (med school, housing)

“A verified short-stay roommate network for medical students on away rotations”


----------------------------------------------------------------------------------------------------------------
EPIC 1 - Landing Page and Early Supply Capture
Goal: Attract initial users before launch
Feature 1.1 - Landing Page - Explain the Product Clearly

PBI 7.1.1 - Marketing Page
User Story: As a user, I want to quickly understand the product and why it is safer/better than alternatives

Requirements
Sections
Headline
“Find verified roomates for your away rotation”
Subheadline:
“Connect with other medical students rotating at the same hospital, city, and dates so you can split housing costs.”
Problem
How it works
Verify
Add Rotation
Browse and Reach-out
Trust Section
Institutional email
Med school ID
CTA to sign up / join waitlist

Acceptance Criteria
Given a new visitor lands, then they can understand the value prop within one screen
Given they click CTA, then they go to signup or waitlist
Headline visible above the fold


PBI 7.1.2 - Waitlist capture
User Story: As a prospective user, I want to leave my info if the full product is not open yet.
Requirements:
Name
School email
School
Rotation city

Acceptance Criteria
Given I submit waitlist form, then my record is stored
Given sign is not open, then waitlist acts as lead capture



EPIC 2 - Account Creation and Verification


Feature 2.1 - Basic Account Signup via Email
PBIS
User can Signup with ANY email manually
To make an account they need the following: 
First Name
Last Name
Email
Gender
Password
Date of Birth
Must be over 18 to use this site. 
Checkbox: User agrees to Privacy Policy and Terms & Conditions



Feature 2.2 -  Quick Register using Social Apps (Google / Facebook / Apple)
PBI
User can sign up via Google 
User can sign up via Facebook
User must agree to Privacy Policy and Terms & Conditions 
Application should get access to your date of birth to confirm 18+
Once a user clicks this a modal will show for them to approve to login via this way


Feature 2.3 - Student Account Signup Flow
PBI
Display button “Sign Up as Student”
Opens up a modal saying “Verify You’re a Student”
Textbox for “Enter a .edu email”
Button: Verify Student Email
Ensure proper form validation to allow only .edu accounts
Flows we can steal:
https://www.fishbowlapp.com/signup/students/email-verification
https://app.joinhandshake.com/student_account_registrations/new#/email



Feature 2.3 - [INVESTIGATE] Medical Student Trust Verification
User uploads med school ID
Admin reviews ID submission
User profile displays verification badge
Add verification pending state
Add verification rejected / resubmit flow




EPIC 3 - Rotation-Centered Profile Creation
Feature 3.1 - Student Profile Creation (User Metadata)
PBIs
Create profile with the following information (create a flow where they fill out the following)
Name
School
Photo
Short Bio
Maximum Monthly Budget
Move In Date
User should share their contact-sharing preferences:
Email 
Phone
Instagram / Social
Add optional preferences
Gender preference
Cleanliness
Pets
Identify what neighborhood they’d like to live in / prefer
Add profile completion indicator 

Feature 3.2 - Rotation Records
PBI
User can add first rotation
User can add multiple upcoming rotations
User can edit rotation details
User can delete rotation
User can mark rotation as upcoming / active
Show something like
My Rotations
UCLA | June 1-30
UCSF | July 5 - Aug 2
Boston | Sept 1-28
Add Rotation
Each rotation should be displayed like a card or row

Based on when and what a user enters for a rotations that will determine who they connect with. 

Feature 3.3 - Rotation-Specific Metadata
PBI
For each rotation entry, they should enter in the following
Required
Institution
City
Start/end date
Optional
Move in date
Anytime
Specific Date
Speciality
Already have housing / need partner status
Capture preferred stay radius or neighborhood optional
Budget Range


Feature 3.4 - My Rotations Dashboard
View list of all upcoming rotations
Show CTA “Edit Rotation”


EPIC 4 - Search, Browse, and Match Discovery
Feature 4.1 - Search Entry Point and Ranking Logic
PBIS
Create browse page for “Find students for this rotation”
Allow user to filter on the following:
Search by City Institution
Filter by Start and End Date
Sort by newest
Display a list of student profiles cards
Rank based on same institution first
Rank same city second
Rank overlap for dates
Exclude users with no overlap
A user must have at least one rotation created in their account before browsing.

<Question>: Require the user to choose which rotation they are browsing for
Example: “Showing matches for UCLA Emergency Medicine - June 1-30
Then below that, show only people relevant to that rotation. 
Can use a dropdown and show example
[UCLA Jun] [UCSF Jul] [Boston Sept]
Given a user may have multiple rotation, when they open browse, then they must select one rotation
Given a rotation is selected, then all results are scoped to that rotation only
Given the user changes the selected rotation, then the candidate list refreshes 

Feature 4.2 - Candidate Rotation Cards Experience
PBIs
Show profile photo 
Show school
Show institution/city
Show speciality
Show dates
Show verification badge
Show short bio
Show buttons
“Reach-out”
Save Profile
View Profile

<If a user has multiple rotations, they can be present in the UCLA one, the UCSF one or the Boston one>
A profile can have multiple rotations and we’ll show rotation cards


Feature 4.3 - Eligibility and Ranking Logic
PBIs
Compute overlap days
Rank same institution first
Rank same city second
Exclude users with no overlap

Feature 4.5 - Saved Prospects
PBIs
Save profile for later
View saved profile list
Removed saved profile
EPIC 5 - Interest, Reach-out, and Contact Exchange
Feature 5.1 Reach-out button (basic version -> Craiglist flow)
User can click on the “Reach-out” button
Reveal contact info (only if both profiles are verified)
User will show two options
Email
“Reply using default mail app”
It will map the roommate to the email and they can send am message through there
They can only reach-out if they are email verified 
If user is not verified -> disable button
Text
Display text if a user wants to reach-out.
Users will communicate outside the application to handle coordination’
When a user messages someone, the conversation should be tied to a specific rotation context for example
Conversation Header: Reading UCLA Rotation - June 1-30


MVP
Profile cards never show direct contact info
Verified User clicks Reach-out to the other verified user
App reveals whether contact methods the recipient has chosen to expose
Open modal with 
Email
Phone
Social
If recipient only enabled email, show email only


Feature 5.2 In-App Messaging (Email Sending Experience)
When a user clicks on “Message” it will show this screen. It will let you reach-out with ability to send a mail to the other user. Essentially allowing them to send the other user an email. We won’t manage the inbox - just let them kick start the convo in email.


Feature / Investigation - Restrict the amount of times people can reach-out to?
Pay to use the site after X reach-outs? 




EPIC 6 - Notifications and Re-Enagement
Feature 6.1 - No match recovery
PBIs
Show empty state when no candidates exists
Suggest widening city/institution criteria
Allow invite class mates

Feature 6.2 - Match
PBI
Email notification
Email notification for candidates
Notification when someone saved/interests you
Notification preferences page settings


EPIC 7 - Admin, Moderation, and Marketplace Quality
Feature 7.1 Verification
PBI
Review uploaded IDs
Approve/reject verification
Add rejection reasoning
Track pending queue SLA

Feature 7.2 Content moderation
Moderation for anit-scam review. Can use AI/manual for flagggin
PBIs
Review reported profiles
Suspend account
Hide user from browse 
Mark profile as suspicious
Add moderation notes

Feature 7.2 Marketplace health
PBIS
Count active verified students
Count active rotations
Count matches/messages started
Count contact-share events
Count top cities by supply

EPIC 8 - Legal, Privacy and User Trust
FEature 8.1 - Privacy Policy
Explain what information RotateMD collects and how it is used.
Suggested URL: /privacy

Information Collected
Name
School email
Profile photo
Rotation information
Med school ID
Optional contact info

How data is used
To create a profile
To verify student status
To show relevant matches
To send notifications

Who can see what
Other students can only see profile informations nad contact methods you choose to share
School email, uploaded ID, and private information are not visible publicity

Data retention
Keep accounts and rotations history for one academic year unless deleted

ACcount deletion
Users can request deletion of account and uploaded ID

Cookies
Explan basic analytics and session tracking

Contact information
Email for privacy question

Criteria
Privacy page is linked in footer and signup flow
Useres must be able to access before creating account
Explains that uploaded IDs are used for verifications and are not shown to other users
Explains that contact information is only relevaed if user opts in

“RotateMD never publicly displays your school email address or uploaded medical school ID. Your contact infomration is only shown if you choose to share it.”


FEature 8.1 - Terms of Service Page
Goal: Define the rules for using RotateMD
/terms

Eligibility
Must be 18+
Must be a medical student
Must provide accurate information

Verification requirements
Must use valid email
Fake accounts may be removed

Acceptable use
No harassment
No scams
No impersonation
No posting false rotation details

User generated content
Users are responsible for their profile and contact info

Contact sharing
RotateMD only facilitates intro
Users are responsible for deciding to contact and housing arrangement made outside of the app

Safety Disclaimer
RotateMD does not guarantee commpatability, safety or housing outcomes

Suspenesion and termination
rotateMD may suspend or remove accounts that violate terms

Limitation of liability
RotateMD is not responsible for disputes, scams, unsafe meetings, or housing arramgenet

Acceptance criteria
Terms display in the footer and sig-up flow
User must check “I agree to Terms and Privacy Policy” during signup






Questions
What is the exact sign up requirements
Should users be allowed to create an account with any email and then later verify?
OR should account creation require an .edu email from the start
What is the min required profile information before a user can browse?
Name + school only?
Name + school + photo + bio?
What exactly happens when a user clicks “Reach-out”?
Reveal contact info
Modla shows only the contact methods the recipient opted to expose
When should contact information become visible?
Immediately after both users are verified?
Should users be allowed to browse before creating a rotation?
Require at least one active rotation before browse is enabled.
What is the exact med-school ID verification process?
Manual admin review?
Third-party?
Store ID after approval or delete it? 
What happens if a user’s verification is rejected?
Can they resubmit?
How many times?
What reasons do they see?
Account_created
Email_verified
Verification_pending
Fully_verified
Rejected
Prefrred architecture for the “Reach-OUt” flow
Mailto link?
SMS deep link? 



Sites I shared
https://roomster.com/
https://www.spareroom.com/roommates
https://www.diggz.co/dashboard
Fishbowl (edu) 
Handshake (Edu) 








