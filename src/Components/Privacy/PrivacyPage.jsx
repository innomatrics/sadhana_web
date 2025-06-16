// PrivacyPage.jsx

import React from 'react';
import './PrivacyPage.scss';

const privacyPolicy = `
**Privacy Policy**

**Effective Date:** [Insert Date]  
**Disclaimer:** In case of any discrepancy or difference, the English version will take precedence over any translation.

At **Sadhana Cart**, we value the trust you place in us and are committed to protecting your privacy. This Privacy Policy explains how we collect, use, store, and safeguard your personal data when you interact with our platform.

---

### 1. Information We Collect

We collect limited personal information that you voluntarily provide when you:

- Create an account  
- Place an order  
- Contact customer support  
- Subscribe to updates or promotional offers  

This may include your **name, email address, phone number, delivery address**, and **payment details**.

---

### 2. How We Use Your Information

Your data is used only to:

- Process and deliver your orders  
- Communicate order updates or support  
- Improve our services and personalize your experience  

We **do not sell or rent** your personal data to third parties.

---

### 3. Data Security

We maintain strict security practices to protect your information against unauthorized access, disclosure, or misuse. Your personal details are stored on secure servers with encryption and access controls in place.

---

### 4. Your Rights & Choices

You have full control over your account and data. You may:

- View and update your information by logging into your account  
- Contact us to request deletion or correction of your data  
- Opt out of promotional emails at any time  

---

### 5. Your Consent

By using our platform, you agree to the terms of this Privacy Policy and give your consent for the collection and use of your personal information as described.

---

### 6. Contact Us

For any questions, concerns, or data access requests, please contact us at:  
📧 **privacy@sadhanacart.in**

---

### 7. Updates to This Policy

We may update this Privacy Policy from time to time. Any changes will be posted here, and your continued use of our services implies your acceptance of those changes.
`;


const PrivacyPage = () => {
    const formatText = (text) => {
        return text
            .split('\n\n')
            .map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                    return <h2 key={index}>{paragraph.replace(/\*\*/g, '')}</h2>;
                }
                return <p key={index}>{paragraph}</p>;
            });
    };

    return (
        <div className="privacy-page">
            {formatText(privacyPolicy)}
        </div>
    );
};

export default PrivacyPage;
