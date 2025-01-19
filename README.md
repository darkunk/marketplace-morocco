# Storage Policy Creation Steps

    Fill out the policy form exactly as follows:

    1. Policy Name:
       - Enter: "Allow authenticated access to listings"

    2. Allowed Operation:
       - Check: SELECT
       - Check: INSERT
       - Check: UPDATE

    3. Target Roles:
       - Leave blank (defaults to all roles)

    4. Policy Definition:
       ```sql
       bucket_id = 'listings' AND 
       auth.role() = 'authenticated'
       ```

    5. Click "Review"

    6. Review the policy:
       - Name: Allow authenticated access to listings
       - Operations: SELECT, INSERT, UPDATE
       - Definition: bucket_id = 'listings' AND auth.role() = 'authenticated'

    7. Click "Save Policy"

    After saving:
    - You should see the new policy in the list
    - Status should be "Active"
    - Operations should show SELECT, INSERT, UPDATE

    To test the policy:
    1. Go to your application
    2. Try uploading an image while logged in
    3. Verify the image appears in your listings bucket
