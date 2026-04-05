# RotateMD

A verified platform for medical students to find compatible roommates during away rotations, reducing short-term housing costs through trusted peer matching.

## Problem
Medical students completing away rotations struggle to find affordable, safe, compatible housing. Current channels are fragmented (Facebook groups, spreadsheets, word-of-mouth) and lack verification.

## Target Users
- 4th-year medical students doing away rotations
- International medical students rotating in the U.S.
- Residents doing short-term electives
- Adjacent: traveling healthcare trainees (PA, nursing)

## Proposed Solution (MVP)
A verified, student-only network where users:
- Create a profile and verify via institutional email + ID
- Post rotations (dates, institution, city, specialty)
- Discover compatible roommates based on overlap
- Connect and share contact info for off-platform coordination

## Core Features
- Rotation posting
- Browse/search matching rotations
- Verification flow (email + ID)
- Contact reveal gated by verification

## High-Level Data Model
**Users**
- id, name, school, email, email_verified, id_verified, profile_photo, social_media, created_at

**Rotations**
- id, user_id, institution, city, specialty, start_date, end_date, housing_preference_optional, created_at, updated_at

**Matches**
- id, matched_user_id, overlap_percentage

**Matching Logic**
- overlap = overlap_days / total_days

## Key Flows
- Onboarding: sign up → verify → post first rotation → browse matches → connect
- Edit rotation: list → edit/delete
- Multi-rotation: add multiple rotations and group matches by rotation
- Cold start: show “no matches yet” + invite classmates

## Launch Plan (Draft)
- Phase 1: landing page + waitlist, manual onboarding
- Phase 2: full signup/verification, rotation posting + matching

## Success Metrics (Draft)
- Profiles created
- Connect attempts
- Verified users
- Rotation listings
- Qualitative: “saved me hundreds of dollars”

## Next Steps
- Convert requirements into user stories and acceptance criteria
- Design initial IA and core screens
- Decide MVP scope for V1 build
