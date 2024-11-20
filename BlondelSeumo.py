import os
import subprocess
from datetime import datetime, timedelta

# Configuration
repo_path = "C:\\Users\\seumoblo\\Documents\\Github\\Profile\\blondelseumo.github.io" # Local path to your GitHub repo
start_date = datetime.now() - timedelta(days=500)  # Start 3 year ago
end_date = datetime.now()
commit_frequency = 5  # Number of commits per day
author_name = "BlondelSeumo"
author_email = "seumoblondel@gmail.com"

# Navigate to the repository
os.chdir(repo_path)

# Generate commits
current_date = start_date
while current_date <= end_date:
    for i in range(commit_frequency):
        # Create a dummy file
        file_name = f"contribution_{current_date.strftime('%Y-%m-%d')}_{i}.txt"
        with open(file_name, "w") as file:
            file.write(f"Contribution on {current_date.strftime('%Y-%m-%d')}")

        # Stage and commit
        subprocess.run(["git", "add", file_name])
        commit_message = f"Contribution: {current_date.strftime('%Y-%m-%d')}"
        subprocess.run([
            "git", "commit", "--date", current_date.strftime("%Y-%m-%dT%H:%M:%S"),
            "--author", f"{author_name} <{author_email}>", "-m", commit_message
        ])

    # Move to the next day
    current_date += timedelta(days=1)

# Push to the remote repository
subprocess.run(["git", "push", "origin", "main"])
