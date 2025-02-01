var CustomVideoPlayer = /** @class */ (function () {
    function CustomVideoPlayer(containerId, videoUrl) {
        var _this = this;
        var container = document.getElementById(containerId);
        if (!container)
            throw new Error("Container not found");
        this.isDone = false;
        container.style.display = "flex";
        container.style.flexDirection = "column";
        container.style.alignItems = "center";
        container.style.justifyContent = "center";
        container.style.height = "100vh";
        container.style.backgroundColor = "rgb(255, 255, 255)";
        this.videoElement = document.createElement("video");
        this.videoElement.src = videoUrl;
        this.videoElement.width = 600;
        this.videoElement.style.marginBottom = "20px";
        container.appendChild(this.videoElement);
        var controlsContainer = document.createElement("div");
        controlsContainer.style.display = "flex";
        controlsContainer.style.alignItems = "center";
        controlsContainer.style.marginBottom = "20px";
        container.appendChild(controlsContainer);
        this.playPauseBtn = this.createButton("▶", function () { return _this.togglePlay(); });
        controlsContainer.appendChild(this.playPauseBtn);
        this.progressBar = document.createElement("input");
        this.progressBar.type = "range";
        this.progressBar.min = "0";
        controlsContainer.appendChild(this.progressBar);
        this.volumeBar = document.createElement("input");
        this.volumeBar.type = "range";
        this.volumeBar.min = "0";
        this.volumeBar.max = "1";
        this.volumeBar.step = "0.01";
        this.volumeBar.value = "1";
        controlsContainer.appendChild(this.volumeBar);
        this.stepBackBtn = this.createButton("⊴", function () { return _this.step(-10); });
        this.stepForwardBtn = this.createButton("⊵", function () { return _this.step(10); });
        controlsContainer.appendChild(this.stepBackBtn);
        controlsContainer.appendChild(this.stepForwardBtn);
        this.fullscreenBtn = this.createButton("⛶", function () { return _this.toggleFullscreen(); });
        controlsContainer.appendChild(this.fullscreenBtn);
        var timeContainer = document.createElement("div");
        timeContainer.style.display = "flex";
        timeContainer.style.alignItems = "center";
        container.appendChild(timeContainer);
        this.currentTimeDisplay = this.createTimeDisplay("00:00");
        this.durationDisplay = this.createTimeDisplay("00:00");
        timeContainer.appendChild(this.currentTimeDisplay);
        timeContainer.appendChild(this.durationDisplay);
        this.init();
    }
    CustomVideoPlayer.prototype.createButton = function (text, clickHandler) {
        var button = document.createElement("button");
        button.textContent = text;
        button.addEventListener("click", clickHandler);
        button.style.margin = "0 5px";
        button.style.padding = "10px";
        button.style.fontSize = "18px";
        button.style.cursor = "pointer";
        button.style.border = "none";
        button.style.backgroundColor = "#333";
        button.style.color = "#fff";
        return button;
    };
    CustomVideoPlayer.prototype.createTimeDisplay = function (initialText) {
        var display = document.createElement("span");
        display.style.color = "#000";
        display.style.fontFamily = "Arial, sans-serif";
        display.style.fontSize = "14px";
        display.style.minWidth = "50px";
        display.textContent = initialText;
        display.style.margin = "0 5px";
        return display;
    };
    CustomVideoPlayer.prototype.init = function () {
        var _this = this;
        this.videoElement.addEventListener("timeupdate", function () {
            return _this.updateProgress();
        });
        this.progressBar.addEventListener("input", function () { return _this.changeProgress(); });
        this.volumeBar.addEventListener("input", function () { return _this.changeVolume(); });
        this.videoElement.addEventListener("loadedmetadata", function () {
            _this.durationDisplay.textContent = _this.formatTimeDisplay(_this.videoElement.duration);
        });
    };
    CustomVideoPlayer.prototype.togglePlay = function () {
        if (this.videoElement.paused) {
            this.videoElement.play();
            this.playPauseBtn.textContent = "⏸";
        }
        else {
            this.videoElement.pause();
            this.playPauseBtn.textContent = "▶";
        }
    };
    CustomVideoPlayer.prototype.updateProgress = function () {
        if (!this.isDone) {
            this.progressBar.value = this.videoElement.currentTime.toString();
            this.currentTimeDisplay.textContent = this.formatTimeDisplay(this.videoElement.currentTime);
        }
        this.progressBar.max = this.videoElement.duration.toString();
        if (!isNaN(this.videoElement.duration)) {
            this.durationDisplay.textContent = this.formatTimeDisplay(this.videoElement.duration);
        }
    };
    CustomVideoPlayer.prototype.changeProgress = function () {
        this.videoElement.currentTime = +this.progressBar.value;
    };
    CustomVideoPlayer.prototype.changeVolume = function () {
        this.videoElement.volume = +this.volumeBar.value;
    };
    CustomVideoPlayer.prototype.step = function (seconds) {
        var newTime = this.videoElement.currentTime + seconds;
        this.videoElement.currentTime = Math.max(0, Math.min(newTime, this.videoElement.duration));
    };
    CustomVideoPlayer.prototype.formatTimeDisplay = function (seconds) {
        var minutes = Math.floor(seconds / 60);
        var leftSeconds = Math.floor(seconds % 60);
        return "".concat(minutes < 10 ? "0" : "").concat(minutes, ":").concat(leftSeconds < 10 ? "0" : "").concat(leftSeconds);
    };
    CustomVideoPlayer.prototype.toggleFullscreen = function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        else {
            this.videoElement.requestFullscreen().catch(console.error);
        }
    };
    return CustomVideoPlayer;
}());
