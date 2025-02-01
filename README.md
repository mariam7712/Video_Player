# 🎥 Custom Video Player

Welcome to the Custom Video Player project! This project is a custom video player built using TypeScript and JavaScript. It provides a user-friendly interface for playing video files with various controls such as play/pause, volume adjustment, progress tracking, and fullscreen mode.

## 🚀 Features

- Play/Pause button
- Volume control
- Progress bar
- Step forward/backward buttons
- Fullscreen toggle
- Current time and duration display

## 📂 Project Structure

- `index.html`: The main HTML file that includes the video player.
- `index.js`: The JavaScript implementation of the custom video player.
- `index.ts`: The TypeScript implementation of the custom video player.
- `package.json`: The project configuration file for npm.
- `tsconfig.json`: The TypeScript configuration file.
- `Video/`: A directory to store video files.

## 🛠️ Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/custom-video-player.git
   cd custom-video-player
   ```

2. Install the dependencies:
   ```sh
   npm install
   ```

### Running the Project

1. Start the project using the following command:

   ```sh
   npm start
   ```

2. Open [index.html](http://_vscodecontentref_/6) in your web browser to see the custom video player in action.

### Usage

To use the custom video player, simply create an instance of `CustomVideoPlayer` by providing the container ID and the video URL:

```html
<div id="videoContainer"></div>
<script src="index.js"></script>
<script>
  new CustomVideoPlayer("videoContainer", "./YourVideoPath.mp4");
</script>
```
