// Organic Farming Hub - JavaScript Functionality

// Language translations
const translations = {
    en: {
        about_title: "About Organic Farming",
        about_text: "Organic farming is a method of crop and livestock production that avoids the use of chemicals or synthetic inputs. It emphasizes sustainable practices that maintain and improve soil health, biodiversity, and ecological balance.",
        benefits_title: "Key Benefits",
        benefit1: "Improves soil health",
        benefit2: "Enhances biodiversity",
        benefit3: "Reduces chemical pollution",
        benefit4: "Promotes sustainable practices",
        practices_title: "Organic Farming Practices",
        composting: "Composting",
        composting_text: "Transform organic waste into nutrient-rich soil amendments that improve soil structure and fertility naturally.",
        crop_rotation: "Crop Rotation",
        crop_rotation_text: "Alternate crops strategically to maintain soil nutrients, reduce pest buildup, and improve yield.",
        pollinator: "Pollinator Support",
        pollinator_text: "Create habitats for beneficial insects and pollinators to enhance crop pollination naturally.",
        cover_crops: "Cover Crops",
        cover_crops_text: "Plant cover crops during off-seasons to prevent soil erosion and add organic matter.",
        resources_title: "Learning Resources",
        resources_subtitle: "Access guides, videos, and expert advice for successful organic farming",
        beginners_guide: "Beginner's Guide",
        beginners_text: "Start your organic farming journey with comprehensive beginner resources and step-by-step guides.",
        video_library: "Video Library",
        videos_text: "Watch expert-led videos on soil management, pest control, and organic crop production techniques.",
        download_guides: "Downloadable Guides",
        guides_text: "PDF guides covering specific topics like organic pest management and soil testing methods.",
        read_more: "Read More",
        view_videos: "View Videos",
        download_guides_link: "Download Guides",
        chat_title: "Farmer's Assistant Chat",
        chat_subtitle: "Get instant assistance with your organic farming questions",
        welcome_message: "Hello! Welcome to Organic Farming Hub. How can I help you today?",
        chat_placeholder: "Type your question about organic farming...",
        quick_links: "Quick Links",
        contact: "Contact",
        footer_desc: "Empowering farmers with sustainable agriculture knowledge and support.",
        all_rights_reserved: "All rights reserved."
    },
    es: {
        about_title: "Sobre la Agricultura Orgánica",
        about_text: "La agricultura orgánica es un método de producción de cultivos y ganado que evita el uso de productos químicos o insumos sintéticos. Enfatiza prácticas sostenibles que mantienen y mejoran la salud del suelo, la biodiversidad y el equilibrio ecológico.",
        benefits_title: "Beneficios Clave",
        benefit1: "Mejora la salud del suelo",
        benefit2: "Mejora la biodiversidad",
        benefit3: "Reduce la contaminación química",
        benefit4: "Promueve prácticas sostenibles",
        practices_title: "Prácticas de Agricultura Orgánica",
        composting: "Compostaje",
        composting_text: "Transforme los residuos orgánicos en aditivos de suelo ricos en nutrientes que mejoran naturalmente la estructura y la fertilidad del suelo.",
        crop_rotation: "Rotación de Cultivos",
        crop_rotation_text: "Alternar cultivos estratégicamente para mantener los nutrientes del suelo, reducir la acumulación de plagas y mejorar el rendimiento.",
        pollinator: "Apoyo a Polinizadores",
        pollinator_text: "Cree hábitats para insectos beneficiosos y polinizadores para mejorar naturalmente la polinización de cultivos.",
        cover_crops: "Cultivos de Cobertura",
        cover_crops_text: "Plante cultivos de cobertura durante las temporadas de descanso para prevenir la erosión del suelo y agregar materia orgánica.",
        resources_title: "Recursos de Aprendizaje",
        resources_subtitle: "Acceda a guías, videos y consejos de expertos para la agricultura orgánica exitosa",
        beginners_guide: "Guía para Principiantes",
        beginners_text: "Comience su viaje en agricultura orgánica con recursos comprehensivos para principiantes y guías paso a paso.",
        video_library: "Biblioteca de Videos",
        videos_text: "Vea videos impartidos por expertos sobre gestión del suelo, control de plagas y técnicas de producción de cultivos orgánicos.",
        download_guides: "Guías Descargables",
        guides_text: "Guías en PDF sobre temas específicos como manejo de plagas orgánicas y métodos de prueba de suelo.",
        read_more: "Leer Más",
        view_videos: "Ver Videos",
        download_guides_link: "Descargar Guías",
        chat_title: "Chat de Asistencia para Agricultores",
        chat_subtitle: "Obtenga asistencia inmediata con sus preguntas sobre agricultura orgánica",
        welcome_message: "¡Hola! Bienvenido a Organic Farming Hub. ¿Cómo puedo ayudarle hoy?",
        chat_placeholder: "Escriba su pregunta sobre agricultura orgánica...",
        quick_links: "Enlaces Rápidos",
        contact: "Contacto",
        footer_desc: "Capacitando a agricultores con conocimientos y apoyo en agricultura sostenible.",
        all_rights_reserved: "Todos los derechos reservados."
    },
    hi: {
        about_title: "ऑर्गेनिक खेती के बारे में",
        about_text: "ऑर्गेनिक खेती रासायनिक या संश्लिष्ट उपयोग को टालकर फसल और पशुधन उत्पादन का एक तरीका है। यह मिट्टी की स्वास्थ्य, जैव विविधता और पारिस्थितिक संतुलन को बनाए रखने और सुधारने वाली स्थायी प्रथाओं पर ज़ोर देता है।",
        benefits_title: "मुख्य लाभ",
        benefit1: "मिट्टी के स्वास्थ्य को बेहतर बनाता है",
        benefit2: "जैव विविधता को बढ़ाता है",
        benefit3: "रासायनिक प्रदूषण कम करता है",
        benefit4: "स्थायी प्रथाओं को प्रोत्साहित करता है",
        practices_title: "ऑर्गेनिक खेती की प्रथाएं",
        composting: "कम्पोस्टिंग",
        composting_text: "जैविक कचरे को प्राकृतिक रूप से मिट्टी की संरचना और पोषकता को बेहतर बनाने वाले खनिज-समृद्ध मिट्टी अभिकरणों में बदलें।",
        crop_rotation: "फसल घूमाव",
        crop_rotation_text: "पोषक तत्वों को बनाए रखने, कीटों के निर्माण को घटाउणे और उपज को बेहतर बनाने के लिए रणनीतिक रूप से फसलों को बदलें।",
        pollinator: "पृष्टिकरणकर्ता सहायता",
        pollinator_text: "पृष्टिकरणकर्ताओं के लिए आवास स्थापित करें ताकि प्राकृतिक रूप से फसलों का पृष्टिकरण बेहतर हो सके।",
        cover_crops: "आवरण फसलें",
        cover_crops_text: "छुट्टियों के दौरान मिट्टी के पहाड़ को रोकने और जैव पदार्थ जोड़ने के लिए आवरण फसलें रोपें।",
        resources_title: "शिक्षा संसाधन",
        resources_subtitle: "ऑर्गेनिक खेती के लिए सफलता के लिए गाइड, वीडियो और विशेषज्ञ सलाह उपलब्ध कराएं",
        beginners_guide: "शुरुआती गाइड",
        beginners_text: "शुरुआती संसाधनों और चरण-दर-चरण मार्गदर्शन के साथ अपनी ऑर्गेनिक खेती की यात्रा शुरू करें।",
        video_library: "वीडियो लाइब्रेरी",
        videos_text: "मिट्टी प्रबंधन, कीट नियंत्रण और ऑर्गेनिक फसल उत्पादन तकनीकों पर विशेषज्ञ-नेतृत्व वाले वीडियो देखें।",
        read_more: "और पढ़ें",
        view_videos: "वीडियो देखें",
        download_guides: "डाउनलोड गाइड",
        guides_text: "ऑर्गेनिक कीट नियंत्रण और मिट्टी परीक्षण के तरीकों पर आधारित विशेष विषयों पर PDF गाइड।",
        chat_title: "किसान सहायता चैट",
        chat_subtitle: "अपने ऑर्गेनिक खेती के प्रश्नों के लिए तुरंत सहायता प्राप्त करें",
        welcome_message: "नमस्ते! आपका ऑर्गेनिक फार्मिंग हब में आपका स्वागत है। आज आपकी कैसे मदद कर सकता हूँ?",
        chat_placeholder: "ऑर्गेनिक खेती के बारे में अपना प्रश्न लिखें...",
        quick_links: "त्वरित लिंक",
        contact: "संपर्क",
        footer_desc: "स्थायी कृषि ज्ञान और सहायता के साथ किसानों को सशक्त बनाना।",
        all_rights_reserved: "सभी अधिकार सुरक्षित हैं।"
    }
};

// Current language
let currentLanguage = 'en';

// Translate elements
function translatePage() {
    const langData = translations[currentLanguage];
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (langData[key]) {
            element.textContent = langData[key];
        }
    });
}

// Language selector event listener
document.getElementById('languageSelect').addEventListener('change', function() {
    const langCode = this.value;
    currentLanguage = langCode;
    translatePage();
});

// Chat functionality
function sendMessage() {
    const input = document.getElementById('userInput');
    const messagesContainer = document.getElementById('chatMessages');
    const message = input.value.trim();

    if (message === '') return;

    // Add user message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.innerHTML = `<div class="message-bubble"><p>${message}</p></div>`;
    messagesContainer.appendChild(userMessageDiv);

    // Clear input
    input.value = '';

    // Bot response based on keywords
    const botResponses = {
        'compost': translations[currentLanguage].composting_text,
        'composting': translations[currentLanguage].composting_text,
        'rotation': translations[currentLanguage].crop_rotation_text,
        'crop': translations[currentLanguage].crop_rotation_text,
        'pest': "Use natural pest control methods like neem oil, companion planting, and introducing beneficial insects like ladybugs and praying mantises.",
        'soil': "Healthy soil is the foundation of organic farming. Test your soil regularly and amend with compost, cover crops, and organic fertilizers.",
        'pesticide': "Avoid synthetic pesticides. Use organic alternatives like neem-based products, insecticidal soaps, and biological controls.",
        'seed': "Choose certified organic seeds when possible. Heirloom varieties are excellent for organic farming as they're adapted to local conditions.",
        'harvest': "Harvest organically by using clean tools, proper drying techniques, and storing in cool, dry conditions.",
        'organic': "Organic farming builds healthy soil through compost, cover crops, and reduced external inputs while maintaining biodiversity.",
        'benefit': translations[currentLanguage].benefit1.split(' ')[0] + " " + translations[currentLanguage].benefit1.split(' ')[1] + " " + translations[currentLanguage].benefit1.split(' ')[2] + " " + translations[currentLanguage].benefit1.split(' ')[3] + " " + translations[currentLanguage].benefit1,
        'benefits': `${translations[currentLanguage].benefit1}। ${translations[currentLanguage].benefit2}। ${translations[currentLanguage].benefit3}। ${translations[currentLanguage].benefit4}।`,
        'general': "Thank you for your question about organic farming! For specific advice, please ask about composting, crop rotation, pest control, or soil health."
    };

    let response = '';
    const lowerMessage = message.toLowerCase();

    // Check for specific keywords
    let found = false;
    for (const [keyword, reply] of Object.entries(botResponses)) {
        if (lowerMessage.includes(keyword)) {
            response = reply;
            found = true;
            break;
        }
    }

    if (!found) {
        // Default response based on language
        if (currentLanguage === 'es') {
            response = "Gracias por su pregunta sobre agricultura orgánica. Para consejos específicos, por favor pregunte sobre compostaje, rotación de cultivos, control de plagas o salud del suelo.";
        } else if (currentLanguage === 'hi') {
            response = "ऑर्गेनिक खेती के बारे में आपका प्रश्न है - बेस्ट प्रैक्टिस के लिए कम्पोस्ट या मिट्टी की बेहतरी के बारे में पूछें।";
        } else {
            response = "Thank you for your question about organic farming! For specific advice, please ask about composting, crop rotation, pest control, or soil health.";
        }
    }

    // Add bot response
    const botMessageDiv = document.createElement('div');
    botMessageDiv.className = 'message bot-message';
    botMessageDiv.innerHTML = `<div class="message-bubble"><p>${response}</p></div>`;
    messagesContainer.appendChild(botMessageDiv);

    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Send button event listener
document.getElementById('sendButton').addEventListener('click', sendMessage);

// Enter key event listener for chat input
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// CTA button event listener
document.getElementById('learnMoreBtn').addEventListener('click', function() {
    document.getElementById('practices').scrollIntoView({ behavior: 'smooth' });
});

// Navigation smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });

        // Update active link
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Resource link handlers
document.querySelectorAll('.resource-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const resourceName = this.textContent;
        alert(`Opening: ${resourceName}\n\nIn a full implementation, this would navigate to the resource page.`);
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    translatePage();
});