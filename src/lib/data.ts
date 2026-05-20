import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

const dataDir = path.resolve('src/data');

export function loadYaml(filename: string): any {
  const filePath = path.join(dataDir, filename);
  const content = fs.readFileSync(filePath, 'utf-8');
  return yaml.load(content);
}

export function getProfile() {
  return loadYaml('profile.yaml');
}

export function getProjects() {
  return loadYaml('projects.yaml');
}

export function getSoftware() {
  return loadYaml('software.yaml');
}

export function getPublications() {
  return loadYaml('publications.yaml');
}

export function getTeaching() {
  return loadYaml('teaching.yaml');
}

export function getOpenTopics() {
  return loadYaml('open-topics.yaml');
}

export function getTravel() {
  return loadYaml('travel.yaml');
}

export function getVolunteering() {
  return loadYaml('volunteering.yaml');
}

export function getSkills() {
  return loadYaml('skills.yaml');
}

export function getNews() {
  return loadYaml('news.yaml');
}
