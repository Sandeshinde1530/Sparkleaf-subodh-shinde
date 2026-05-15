function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const sheet =
      SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Inquiries') ||
      SpreadsheetApp.getActiveSpreadsheet().insertSheet('Inquiries');

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Full Name',
        'Email',
        'Phone',
        'Interested Plan',
        'Message',
        'Consent',
      ]);
    }

    sheet.appendRow([
      new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.fullName,
      data.email,
      data.phone || '',
      data.planId,
      data.message || '',
      data.consent,
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: err.message })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ status: 'ok' })
  ).setMimeType(ContentService.MimeType.JSON);
}
