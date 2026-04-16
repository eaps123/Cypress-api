#!/bin/bash

if [ "$STATUS" = "ERROR" ]; then curl -X POST -H 'Content-type: application/json' --data '{
    "attachments": [
        {
            "color": "#FF0000",
            "blocks": [
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "You can access the link on Gitlab: https://gitlab.com/zenvia/service/automation/automation-service-api/-/jobs/'"$CI_JOB_ID"'",
                    },
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*Environment:*\n'"$ENV"'"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*TAGS:*\n'"$TAGS"'"
                    }
                },
                {
                    "type": "section",
                    "text": {
                        "type": "mrkdwn",
                        "text": "*BrowserStack:*\n'"$URL_DASHBOARD"'"
                    }
                }
            ]
        }
    ]
}' $SLACK_CHANNEL ; fi