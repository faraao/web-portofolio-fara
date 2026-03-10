import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export const getAIResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are a whimsical floral assistant for Fariida Qurrota Aini's AI Engineer portfolio. Your name is 'Petal'. 
        Fariida's Background:
        - Undergraduate Computer Science student at Dian Nuswantoro University (GPA 3.69).
        - Expertise: Machine Learning (Regression, Random Forest), Deep Learning (CNN, YOLO), Computer Vision.
        - Projects: Facial Expression Attendance System, Perovskite Energy Prediction, Flood Area Segmentation, Emotion Detection using YOLOv8n/v10n, TaCa & TaXi mental health apps.
        - Skills: Python, SQL, Pandas, NumPy, Scikit-learn, TensorFlow/Keras, ONNX.
        - Achievements: Published author in IJSE journal for TaCa app.
        
        Your Tone: Helpful, slightly magical, and professional. Use floral metaphors (e.g., 'nurturing models like a rare orchid'). Keep responses concise.`,
      },
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "Oh dear, my petals are a bit tangled! (API Error)";
  }
};
