import jsPDF from 'jspdf';
import { personalData } from '../data/personal';
import { skillCategories } from '../data/skills';
import { experienceData } from '../data/experience';
import { projectsData } from '../data/projects';

export const generateResumePdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 18;

  // Header - Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(22);
  doc.setTextColor(24, 30, 42);
  doc.text(personalData.name, 20, y);

  y += 6;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(37, 99, 235); // Blue
  doc.text(personalData.role.toUpperCase(), 20, y);

  y += 5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(71, 85, 105);
  doc.text(`${personalData.location}  |  ${personalData.socials.email}  |  GitHub: ${personalData.socials.github}  |  LinkedIn: ${personalData.socials.linkedin}`, 20, y);

  y += 4;
  doc.setDrawColor(203, 213, 225);
  doc.setLineWidth(0.4);
  doc.line(20, y, pageWidth - 20, y);

  // Summary
  y += 6;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('PROFESSIONAL SUMMARY', 20, y);

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  const splitSummary = doc.splitTextToSize(personalData.summary, pageWidth - 40);
  doc.text(splitSummary, 20, y);
  y += splitSummary.length * 4.5 + 2;

  // Technical Skills
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('TECHNICAL SKILLS', 20, y);

  y += 4.5;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  skillCategories.forEach((cat) => {
    doc.setFont('helvetica', 'bold');
    doc.text(`${cat.title}: `, 20, y);
    const titleWidth = doc.getTextWidth(`${cat.title}: `);
    doc.setFont('helvetica', 'normal');
    const skillsText = cat.skills.join(', ');
    const splitSkills = doc.splitTextToSize(skillsText, pageWidth - 40 - titleWidth);
    doc.text(splitSkills, 20 + titleWidth, y);
    y += splitSkills.length * 4.2;
  });

  y += 3;
  // Experience
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('EXPERIENCE', 20, y);

  experienceData.forEach((exp) => {
    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(exp.role, 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(`${exp.company}  |  ${exp.period}`, pageWidth - 20, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(51, 65, 85);
    exp.responsibilities.forEach((resp) => {
      doc.text('•  ' + resp, 24, y);
      y += 4;
    });
  });

  y += 2;
  // Projects
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(30, 41, 59);
  doc.text('FEATURED PROJECTS', 20, y);

  projectsData.forEach((proj) => {
    y += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(proj.title, 20, y);
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(71, 85, 105);
    doc.text(proj.date, pageWidth - 20, y, { align: 'right' });

    y += 4;
    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(37, 99, 235);
    doc.text(`Tech: ${proj.technologies.join(', ')}`, 20, y);

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(51, 65, 85);
    const splitDesc = doc.splitTextToSize(proj.description, pageWidth - 40);
    doc.text(splitDesc, 20, y);
    y += splitDesc.length * 3.8;

    if (proj.testing) {
      doc.setFont('helvetica', 'bold');
      doc.setTextColor(16, 185, 129); // Green badge
      doc.text(`• Verification: ${proj.testing.count} ${proj.testing.headline} (${proj.testing.description})`, 22, y);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(51, 65, 85);
      y += 4;
    }
  });

  doc.save('Dhanush_J_Java_Developer_Resume.pdf');
};
