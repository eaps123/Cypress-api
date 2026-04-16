const respStatus400 = {
    "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
    "title": "One or more validation errors occurred.",
    "status": 400,
    "traceId": "00-d50543196a4a572c8418e124b2bbcdd8-02cd4f8d48193f6d-00",
    "errors": {
        "email": [
            "The email field is required."
        ]
    }
}

const respStatus404 = {
  "message": "Person not found",
  "httpStatusCode": 404
}

export { respStatus400, respStatus404}