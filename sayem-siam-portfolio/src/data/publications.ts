import type { Publication } from "@/src/types"

export const publications: Publication[] = [
  {
    title:
      "FVCM-Net: Interpretable Privacy-Preserved Attention Driven Lung Cancer Detection from CT Scan Images with Explainable HiRes-CAM Attribution Map and Ensemble Learning",
    authors: [
      "Abu Sayem Md Siam",
      "Md Mehedi Hasan",
      "Yeasir Arafat",
      "Md Muzadded Chowdhury",
      "Sayed Hossain Jobayer",
      "Fahim Hafiz",
      "Riasat Azim",
    ],
    venue: "Biomedical Signal Processing and Control, Vol. 112, p. 108719 (Elsevier)",
    year: 2025,
    abstract:
      "FVCM-Net is a novel framework merging federated learning, attention mechanisms, and ensemble learning for privacy-preserving lung cancer detection from CT scans. Federated learning enables collaborative training across institutions without data sharing, while XAI tools like SHAP and HiResCAM provide interpretability. Evaluated on LIDC-IDRI, IQ-OTH/NCCD, and Kaggle datasets, FVCM-Net attained 98.26% accuracy and a 97.37% F1-score.",
    tags: ["Federated Learning", "Computer Vision", "Explainable AI", "Medical Imaging"],
    citations: 0,
  },
  {
    title:
      "Decentralized Medical Image Sharing: A Blockchain Based Approach with Subject Sensitive Hashing for Enhanced Privacy and Integrity",
    authors: [
      "Yeasir Arafat",
      "Abu Sayem Md Siam",
      "Md Muzadded Chowdhury",
      "Md Mehedi Hasan",
      "Sayed Hossain Jobayer",
      "Swakkhar Shatabda",
      "Salekul Islam",
      "Saddam Mukta",
    ],
    venue: "IET Blockchain, Vol. 5, Issue 1, e70009 (Wiley)",
    year: 2025,
    abstract:
      "A blockchain-based framework for secure medical image sharing emphasizing data integrity and privacy. It combines JPEG compression with deep neural network-based subject-sensitive hashing (SSH) to preserve diagnostic quality, then encrypts and stores data on IPFS, with smart contracts validating access requests. Experimental validation across multiple datasets yields a 98% average correctness rate.",
    tags: ["Blockchain", "Subject-Sensitive Hashing", "Privacy", "IPFS"],
    citations: 0,
  },
  {
    title:
      "Deep Learning for Identification of Skin Diseases: Emphasizing on Arsenic-Induced Skin Conditions",
    authors: [
      "Sayed Hossain Jobayer",
      "Md Muzadded Chowdhury",
      "Abu Sayem Md Siam",
      "Umma Hani Mim",
      "Md Mazedul Hasan Khan Zidan",
      "Mansora Akter Bithe",
      "Md Mehedi Hasan",
    ],
    venue: "27th International Conference on Computer and Information Technology (ICCIT), pp. 3254–3259 (IEEE)",
    year: 2024,
    abstract:
      "This study develops ARS-CNNSA, a deep learning model for identifying arsenic-related and common skin diseases using a custom dataset. Integrating Conv2D layers and self-attention mechanisms, ARS-CNNSA excelled with 91% accuracy and a 90% F1-score, outperforming pre-trained models such as VGG16, MobileNetV2, and InceptionV3, advancing diagnostic precision in arsenic-prone areas.",
    tags: ["Deep Learning", "Computer Vision", "Self-Attention", "Dermatology"],
    citations: 0,
  },
  {
    title:
      "SE-VGG16 MaizeNet: Maize Disease Classification Using Deep Learning and Squeeze and Excitation Attention Networks",
    authors: [
      "Abu Sayem Md Siam",
      "Abir Hossain",
      "Rifat Bin Hossain",
      "Md Musfiqur Rahman",
    ],
    venue: "International Conference on Emerging Smart Computing and Informatics (ESCI), pp. 1–6 (IEEE)",
    year: 2024,
    abstract:
      "This study analyzes maize leaf disease detection using deep transfer learning on the Plant Village and PlantDoc datasets, introducing a novel integration of attention mechanisms into VGG16 and ResNet50. The VGG16+SE composite achieved 93.44% validation accuracy while MobileNetV2 led with 94.76%, enabling early detection to aid farmers and reduce agricultural losses.",
    tags: ["Deep Learning", "Transfer Learning", "Squeeze-and-Excitation", "Agriculture"],
    citations: 0,
  },
  {
    title:
      "TextileNet: A Deep Learning Approach for Textile Fabric Material Identification from OCT and Macro Images",
    authors: [
      "Abu Sayem Md Siam",
      "Yeasir Arafat",
      "Md Mushfikur Talukdar",
      "Md Mehedi Hasan",
      "Raiyan Rahman",
    ],
    venue: "26th International Conference on Computer and Information Technology (ICCIT), pp. 1–6 (IEEE)",
    year: 2023,
    abstract:
      "A deep learning and transfer learning approach for textile fabric classification using Optical Coherence Tomography (OCT) and macro images. Comparative analysis of pre-trained CNN architectures highlights MobileNetV2's superior results, achieving 99.87% accuracy on OCT images and 95% on macro images, demonstrating strong potential for real-world fabric classification.",
    tags: ["Deep Learning", "Transfer Learning", "Computer Vision", "OCT Imaging"],
    citations: 0,
  },
  {
    title: "Bangla News Classification Employing Deep Learning",
    authors: [
      "Abu Sayem Md Siam",
      "Md Mehedi Hasan",
      "Md Mushfikur Talukdar",
      "Md Yeasir Arafat",
      "Sayed Hossain Jobayer",
      "Dewan Md Farid",
    ],
    venue: "International Conference on Intelligent Systems and Data Science, pp. 155–169 (Springer)",
    year: 2023,
    abstract:
      "A deep learning model for classifying Bangla news articles using a hybrid Recurrent Neural Network combining Bi-directional LSTM and Bi-directional GRU. Benchmarked against traditional machine learning techniques such as naïve Bayes and decision trees, the deep learning models achieved nearly 90% accuracy.",
    tags: ["NLP", "Deep Learning", "BiLSTM", "Text Classification"],
    citations: 0,
  },
]
