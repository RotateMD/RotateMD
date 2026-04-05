RotateMD

Problem Statement
Medical students completing away rotations struggle to find affordable, safe, and compatible housing, often relying on fragmented, untrusted channels.
Housing for away rotations is expensive and short-term (~2–4 weeks)
Students rely on Facebook groups, spreadsheets, or word-of-mouth
No easy way to find other students with overlapping dates at the same institution


Who experiences this?
Primary: 
4th-year medical students doing away rotations
International medical students rotating in the U.S.
Secondary: Residents doing short-term electives
Edge / adjacent:
Traveling healthcare trainees (PA, nursing students) 



Why This Matters
Trend / macro signal:
Away rotations are becoming more competitive and more common
Rising housing costs in major medical cities 
Students increasingly rely on peer-to-peer platforms
Why now:
No trusted, verified network exists for this use case
Students already hack together solutions → clear unmet need
Verification (edu email + ID) 
If we ignore the problem
Students overpay for housing (>$1K/month unnecessarily)
Increased stress during an already high-stakes period
Continued reliance on sketchy / inefficient channels



Current Alternatives
What do people do today?
Facebook groups (e.g., “Med Student Housing”)
Airbnb / Craigslist (solo booking)
Reddit?
<Anything else?>
Literally just word of mouth from students at other schools, Reddit, airbnb, rotating room/furnished finder (sketchier)


Why those solutions suck (or are expensive)
Hard to match/find people who are in rotations the same time as you,\
Relying on friends of friends 
Expensive for a one bedroom place on airbnb
Furnished finder/rotating room relies on randoms you cant screen beforehand. Some people have weird rules (my friend said one wouldnt let him turn on AC in the summer). 




Proposed Solution (v1)
A verified platform for medical students to find and connect with others rotating at the same institution, city and time, enabling them to share housing and reduce costs.
Verified student only network
Rotation posting (dates, institution, city, specialty) 
They’ll be able to search and match based on dates and location, or even have those just presented to them when they log in based on match from the website?
Outputs
List of compatible roomates


Contact info for direct coordination, contact info available dependent on what someone whats to have available–could be social, #, email. Also school, year, a photo or two? with a little bio as well


Published / Available via
Web application






Features

Summary
Persona
Job Story
Comments
Post rotation
Med student
When I know my rotation schedule, I want to post it so other can find me
Supply creation
Browse matches 
Med students
When I rotations, I want to find overlapping students so I can split housing
Core value
Verification 
Med student
When I join, I want to trust others 
Trust moat



When I get accepted to an away rotation I want to quickly find roomates so that I can reduce housing cost
When I browse rotation, I want to see who matches the same dates so that I know compatibility
When I connect with someone, I want direct contact info so that we can coordinate outside the app

User Experience
User signs up -> verifies via institutional email + ID
User posts rotations (dates, city, hospital, specialty)
System surfaces matches. User chooses which ones based on the filters
User browses -> clicks “Connects” -> receives contact info
Think users would feel safer being able to message on the website. Can have it so you can only message people who will be in the same city as you during those dates to minimize spam? 
Use coordinate housing externally


MVP Spec and Screens
Landing Page
Sign Up / Login
Post Rotation
Ability for a user to post their own rotations and dates
Browse Rotations
Ability for a user to search for and browse/connect with rotations
Profile 

Data Model
Users
Id
Name
School
Email
Email_Verified (T/F)
Created_at
Id_verified 
Profile_photo
Social_media

Rotations
Id
User_id
Institution
City
Specialty 
Start_date
End_date
Housing_preference_optional
Created_at
Updated_at

Matches
Id
Matched_user_id
Overlap_percentage
Matching Logic
Overlap = overlap_days / total_days

Example: 
User A: June 1-30
User B: June 10-25
-> Overlap = 15 days
-> match %
User Flow
Flow: Onboarding
User clicks on Get Started / Sign-Up via Landing Page
User enters in Name, Email (prefer .edu), Password and click “Create Account”
User will do email verification (“Check your email to verify your account”)
User will post their First Rotations (“Add your first rotation to find matches”)
User will fill in the fields (institution, start date, end date, specialty) 
User will then be able browse and find matches with UI listing of users, overlap %, verified users
User clicks Connect
If NOT verified -> “Verify your student email to connect”
If verified -> reveal contact info (or allow connection) 


Flow: Edit Rotation 
User goes to “My Rotations”
Sees list
UCLA - June
UCSF - July
Click “Edit” 
Update dates or deletes

Flow: Multi-Rotation Management
User clicks
“Add Another Rotation”
Adds
City
Dates
Institution
System groups matches by rotation
UCLA -> 4 matches
NYC -> 2 matches
Chicago -> 0 matches

Flow: Cold Start / No Matches
User posts rotations -> sees “No matches yet”
User should see “You’re early - we’ll notify you when someone matches”
App can suggest you to “Invite classmates”


User Flow: Someone Matches With Me
Email Notification - “New match at UCLA during your rotation
“Alex is rotating at UCLA during your dates” , View Match
User Clicks Notification 
User can click “Connect” or User can “Ignore / browse others”
If they want to Connect and verified
Show contact info 
If they want to Connect and not verified
Verify your student email to connect
Verify button


Launch Plan
Phase 1 (Week 1–3)
Landing page + waitlist
Manual onboarding of initial users (friends / med schools)
Fake data / profiles for demos


Phase 2 (Week 4–6)
Full signup +verification flow
Rotation posting + browse page 
Basic matching 



Success Metrics
Engagement
# of profiles created
Number of helping coordinating housing
Provide a followup email or verification that they heard back from their match or did get housing


Content / Supply
# of active rotations listing


Adoption
# of verified users



Monetization Angle
Not MVP, but viable paths:
Free for now
Over time charge membership? After users?
Other options
Affiliate links with Airbnb
Ads on the site 
Sell premium features

Fastest Test
What can we validate in 2–3 weeks?
Share landing page + create a waitlist
Post in med school communities 
(Reddit)
Facebook group
Student GroupMes (I can post in my school’s groupme and ask friends at other med schools to share in theirs)
We can share a Google Forms or share the landing page to people to see if they’d like to try it out. Landing page and signup for waitlist/beta for sure. Perhaps a list of features with a open box for them to type what they’d want specifically or whats important to them
We’ll ask them if this is something they’d consider this.

Measure
% of users willing to share rotation data



Success Signals
[Qualitative signal]
“This saved me hundreds of dollars
Way better than Facebook groups


[Quantitative signal]
30-40% of users attempt to connect
High repeat visits 



Key Risks 
Cold start. How much people can we get to try out the site? 
Privacy/Trust with ID verification



People/UX We Can Steal Ideas From
Roomster https://roomster.com/
Roomies https://www.roomies.com/
Rotating Room https://rotatingroom.com/
Furnished Finder  https://www.furnishedfinder.com/


Reddit Posts
https://www.reddit.com/r/physicaltherapy/comments/1l8dc0f/doing_clinical_rotations_out_of_town_how_should/
https://www.reddit.com/r/medicalschool/comments/wnswuj/how_do_you_find_housing_for_away_rotations/
https://www.reddit.com/r/PTschool/comments/1e73ae4/deleted_by_user/




