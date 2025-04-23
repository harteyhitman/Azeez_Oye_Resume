// components/ResumePDF.tsx
'use client'

import React from 'react';
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { paddingRight: 100,  paddingLeft: 100, paddingTop: 20,  fontSize: 12, fontFamily: 'Helvetica', color: '#000', },
  header: { textAlign: 'center', marginBottom: 20 },
  name: { fontSize: 20, fontWeight: 'bold' },
  contact: { fontSize: 10, marginTop: 5, color: '#555' },
  section: { marginBottom: 5 },
  heading: { fontSize: 14, marginBottom: 5, fontWeight: 'bold', borderBottom: 1, paddingBottom: 3 },
  text: { marginBottom: 5, lineHeight: 1.5 },
  list: { marginLeft: 15, marginTop: 5 },
  listItem: { marginBottom: 3 },
  link: { color: '#007BFF', textDecoration: 'none' },
});

const ResumePDF = () => (
  <Document>
    <Page style={styles.page}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.name}>Azeez Oyegoke</Text>
        <Text style={styles.contact}>
          <Link style={styles.link} src="mailto:oyegoke.a18@example.com">
            oyegoke.a18@gmail.com
          </Link>{" "}
          |{" "}
          <Link style={styles.link} src="https://wa.me/2348136023232">
            08136023232
          </Link>{" "}
          |{" "}
          <Link style={styles.link} src="https://www.linkedin.com/in/azeez-oyegoke-434716204/">
            LinkedIn
          </Link>{" "}
          |{" "}
          <Link style={styles.link} src="https://github.com/harteyhitman">
            GitHub
          </Link>
        </Text>
      </View>

      {/* Professional Summary */}
      <View style={styles.section}>
        <Text style={styles.heading}>Professional Summary</Text>
        <Text style={styles.text}>
          Highly skilled Frontend Developer with over 3+ years of experience in building dynamic and
          responsive web applications using React, Next.js, and TypeScript. Passionate about creating
          seamless user experiences and implementing scalable, maintainable code. Strong expertise in
          WordPress development, design system implementation, and performance optimization. Experienced
          in full-stack development with NestJS for backend applications. Adept at collaborating with
          cross-functional teams to deliver high-quality software solutions. Currently expanding knowledge
          in backend development, API design, and database management to become a full-stack developer.
        </Text>
      </View>

      {/* Technical Skills */}
      <View style={styles.section}>
        <Text style={styles.heading}>Technical Skills</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>Frontend:</Text> React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, SCSS, Tailwind CSS
          </Text>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>Backend:</Text> Node.js, Express.js, NestJS, PostgreSQL, REST API development
          </Text>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>State Management:</Text> Zustand, Redux
          </Text>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>Tools & Platforms:</Text> Git, GitHub, CI/CD, Webpack, Figma, Adobe XD
          </Text>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>CMS & WordPress:</Text> WordPress theme and plugin development, Elementor, Gutenberg
          </Text>
          <Text style={styles.listItem}>
            <Text style={{ fontWeight: 'bold' }}>Other Skills:</Text> UI/UX design principles, performance optimization, accessibility best practices
          </Text>
        </View>
      </View>

      {/* Work Experience */}
      <View style={styles.section}>
        <Text style={styles.heading}>Work Experience</Text>
        <View style={styles.list}>
          <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Frontend Developer | Rogue Devtech</Text>
          <Text style={styles.listItem}>• Developed and optimized user-friendly interfaces using React and Next.js for various clients.</Text>
          <Text style={styles.listItem}>• Implemented component-based architectures for reusability and maintainability.</Text>
          <Text style={styles.listItem}>• Designed and implemented a scalable dashboard for fintech and e-commerce applications.</Text>
          <Text style={styles.listItem}>• Developed APIs using NestJS for a simple blog application and a mental health tracking app.</Text>
          <Text style={styles.listItem}>• Collaborated with designers to translate UI/UX designs into functional web applications.</Text>
          <Text style={styles.listItem}>• Created and customized WordPress themes and plugins to align with client requirements.</Text>
        </View>
      </View>

      {/* Notable Projects */}
      <View style={styles.section}>
        <Text style={styles.heading}>Notable Projects</Text>
        <View style={styles.list}>
          <Text style={{ fontWeight: 'bold', marginBottom: 3 }}>Simple Product Store</Text>
          <Text style={styles.listItem}>• Developed a store that lists user information and products with age restrictions.</Text>
          <Text style={styles.listItem}>• Simulated API calls for asynchronous data fetching and processing.</Text>

          <Text style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>Depression App</Text>
          <Text style={styles.listItem}>• Designed and developed a full-stack mental health application using NestJS and Next.js.</Text>
          <Text style={styles.listItem}>• Implemented Zustand for state management and SCSS for styling.</Text>
          <Text style={styles.listItem}>• Developed an admin page, login, and signup functionalities.</Text>

          <Text style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>TaskMaster (Software Engineering Capstone Project)</Text>
          <Text style={styles.listItem}>• Built a full-stack task management system using Next.js and mock data for backend.</Text>
          <Text style={styles.listItem}>• Implemented user authentication, task creation, and filtering functionalities.</Text>
          <Text style={styles.listItem}>• Deployed frontend on Vercel/Netlify and backend on Fly.io.</Text>
        </View>
      </View>

      {/* Education & Certifications */}
      <View style={styles.section}>
        <Text style={styles.heading}>Education & Certifications</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• High National Diploma, Rufus Giwa Polytechnic Owo – 2017</Text>
          <Text style={styles.listItem}>• Software Engineering Capstone Project, 3mtt – 2024</Text>
          <Text style={styles.listItem}>• Backend Development (Ongoing Study)</Text>
        </View>
      </View>

      {/* Soft Skills */}
      <View style={styles.section}>
        <Text style={styles.heading}>Soft Skills</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Problem-solving & analytical thinking</Text>
          <Text style={styles.listItem}>• Effective communication & collaboration</Text>
          <Text style={styles.listItem}>• Adaptability & continuous learning</Text>
          <Text style={styles.listItem}>• Attention to detail</Text>
          <Text style={styles.listItem}>• Strong project management skills</Text>
        </View>
      </View>

      {/* Languages */}
      <View style={styles.section}>
        <Text style={styles.heading}>Languages</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• English (Fluent)</Text>
          <Text style={styles.listItem}>• Yoruba (Fluent)</Text>
          <Text style={styles.listItem}>• Spanish (Beginner - Learning)</Text>
          <Text style={styles.listItem}>• Arabic (Beginner - Learning)</Text>
        </View>
      </View>

      {/* Interests */}
      <View style={styles.section}>
        <Text style={styles.heading}>Interests</Text>
        <View style={styles.list}>
          <Text style={styles.listItem}>• Open-source contributions</Text>
          <Text style={styles.listItem}>• Blogging about web development</Text>
          <Text style={styles.listItem}>• Learning backend technologies</Text>
          <Text style={styles.listItem}>• Content creation on food security & natural herbs</Text>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;