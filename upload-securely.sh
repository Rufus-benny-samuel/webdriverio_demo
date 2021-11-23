#!/bin/bash
# 
# This script securely uploads the contents of a folder from the local filesystem to a remote filesystem
# where files are only accessible to @anywhere.co Google account holders.
# 
# - Obtain the proj_name and server_username from IT.
# - local_report_folder is the foldername which we'll upload to the remote server
# - remote_report_folder is the destination foldername on the remote server. Using a date stamp, we 
#   guarantee that it won't overwrite previous snapshots of the data.
# - remote_filename is the name of the HTML file which will be loaded when clicking the generated link.
# - keypath is the path to the ssh key, required in order to transfer data to the server. 

# Per-project settings
proj_name="cwa-automation"
server_username="cwa"
local_report_folder="./allure-report"
remote_report_folder="allure-report_"$(date "+%d-%m-%y-%H:%M:%S")
remote_filename="index.html"
#keypath="./.secrets/id_rsa"
#keypath=${{ secrets.AUTOMATION_KEY_RUFUS }}

echo "Uploading $local_report_folder to server..."
#scp -C -q -i $keypath -P 2020 -r $reportpath reportsftp@testing-reports.setmore.com:/files/$proj_name/$filename
scp -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -C -q -P 2020 -r $local_report_folder $server_username@testing-reports.setmore.com:/files/$proj_name/$remote_report_folder
echo 
echo "$local_report_folder copied to server."
echo "Find the report publicly available at https://testing-reports.setmore.com/$proj_name/$remote_report_folder/$remote_filename"
