const a = 10   // First commit: Initialized a variable 'a'

// Second Commit
const b = 20;  // Added variable 'b'

function addNumber(a, b) {
    let sum = a + b;
    return sum;
}

// Third Commit
function productOfNumbers(a, b) {
    let product = a * b;
    return product;
}

// ----------------------------
// Commit IDs (in order):
// 1d8a96626963bd6061c1fa99a0f8694cd9337401 -> First commit (a)
// b57827621666f8788cec00959ded968a399ccae6 -> Second commit (b and addNumber)
// cda0eae92eb9e5ea22aec310ea6e7d1d523775a4 -> Third commit (productOfNumbers)

// ----------------------------
// To checkout a specific commit:
// git checkout 1d8a96626963bd6061c1fa99a0f8694cd9337401

// NOTE: You’ll be in a 'detached HEAD' state, meaning:
// You’re not on any branch (like 'master' or 'main'),
// and any changes made here won’t be tracked by your usual branches.

// To return to the latest commit on the main branch:
// git checkout master

// ----------------------------
// Git Commands Summary:

// git init
// → Initializes Git in your project folder (starts version control)

// git status
// → Shows the current state of your working directory:
//   - Which files have been changed
//   - Which are staged (ready to commit)
//   - Which are not tracked
//   - Very useful to check before doing git add or git commit

// git add .
// → Stages all changed/added files so they’re ready to commit

// git commit -m "Your message"
// → Creates a new commit (like a checkpoint in your project history)

// git push
// → Sends your commits to the remote repository (like GitHub)

// git pull origin master
// → Brings the latest version from the remote repository to your local machine

// ----------------------------
// REAL-WORLD SCENARIO:

// Imagine you're building a "Login" page. Meanwhile, your teammate pushes a "Profile" page.

// When you try to push your Login feature, Git says "REJECTED!"
// Because your local repo is outdated—it doesn’t have the Profile page.

// What to do:
// 1. git pull origin master
//    → This updates your codebase with the latest changes (Profile page)

// 2. Resolve any conflicts (if there are any)

// 3. git add . → Stage any changes after merge
// 4. git commit -m "merged profile and login changes"
// 5. git push origin master → Now your Login feature is safely pushed!

