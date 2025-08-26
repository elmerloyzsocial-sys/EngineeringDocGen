# Engineering Document Generator

This website helps engineers easily create, review, and save various types of engineering documents. It provides guided forms for document creation, sample content to help you get started, and options to save your work locally and to Google Drive.

---

## **Features**

- **Multiple Document Types:** Select from a wide range of engineering document templates (Technical Report, Specification, Risk Assessment, Project Charter, Safety Report, Change Request, Design Review, First of Class Test Report, VCRM Update, As Built Update, etc.).
- **Guided Form Completion:** The website walks you through each document section, with sample text provided in each input box.
- **Typewriter Style:** All documents are displayed and edited in a classic typewriter font for clarity and style.
- **Local History:** All completed documents are saved in your browser for future review and download.
- **Google Drive Integration:** Save your completed documents directly to your Google Drive (requires setup of API keys and client ID).
- **Review Previous Documents:** Easily browse, view, or delete your previous work from the review page.

---

## **How to Use**

### 1. **Create a Document**
1. Open the website in your browser (`index.html`).
2. On the homepage, select your desired document type from the dropdown menu.
3. Click **Start**.
4. For each section, edit the sample content as needed.
5. Click **Compile Document** when finished. Your completed document will be displayed.

### 2. **Save Your Document**
- Click **Save to Google Drive** to upload the document to your Google Drive.  
  > **Note:** You must set up Google Drive API credentials (see below).
- All documents are also saved automatically in your browser and can be reviewed later.

### 3. **Review Previous Documents**
- On the homepage, click **Review Previous Documents**.
- Browse the list of your completed documents.
- Click **View** to read a previous document, or **Delete** to remove it from local storage.
- Click **Back** to return to the main page.

---

## **Google Drive Setup**

To enable "Save to Google Drive" functionality:

1. **Google Cloud Setup**
   - Go to [Google Cloud Console](https://console.cloud.google.com/).
   - Create a new project.
   - Enable the **Google Drive API**.
   - Create OAuth 2.0 Web credentials.
   - Copy your **Client ID** and **API Key**.

2. **Edit `index.html`**
   - Replace the `YOUR_GOOGLE_CLIENT_ID` and `YOUR_API_KEY` placeholders at the top of the HTML file with your values.

3. **Authentication**
   - The first time you save to Drive, you’ll be asked to sign in and authorize the app.

---

## **Technical Notes**

- All data is stored **locally** in your browser’s LocalStorage for privacy. No data is sent to a server.
- If you clear your browser storage/cache, your history of documents will be erased.
- For Google Drive integration, your credentials remain private and only you have access to your Drive.

---

## **Troubleshooting**

- **Google Drive Save Not Working:**  
  Make sure your API credentials are correct, and you have authorized the app when prompted.
- **Document Not Saving Locally:**  
  Ensure your browser allows local storage and you haven’t disabled cookies.
- **Sample Content Not Appearing:**  
  Refresh the page to reload templates.

---

## **License**

This project is open source and free to use for educational and non-commercial purposes.

---

## **Contributing**

Feel free to fork, improve, and suggest new document templates or features!
