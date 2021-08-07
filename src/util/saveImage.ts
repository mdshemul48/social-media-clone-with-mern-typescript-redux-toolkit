import fs from 'fs';

export default function saveImage(path: string, imageName: string): void {
  const dir = `${__dirname}/../../images`;
  const newPath = `${dir}/${imageName}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  fs.copyFileSync(path, newPath);
}
