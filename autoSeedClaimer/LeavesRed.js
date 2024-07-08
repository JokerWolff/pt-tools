class SeedClaimer {
    constructor(containerSelector, suffix, addApi, delApi) {
        this.container = document.querySelector(containerSelector);
        this.suffix = suffix;
        this.addApi = addApi;
        this.delApi = delApi;
        this.seedItems = Array.from(this.container.querySelectorAll("table > tbody > tr"));
        this.seedItems.shift(); // Remove header row
        this.initButtons();
        this.initEvents();
        this.createCheckboxes();
    }

    initButtons() {
        this.claimButton = this.createButton("认领选中的种子", () => this.claimSelectedSeeds(), "claimSelectedSeeds" + this.suffix);
        this.cancelClaimButton = this.createButton("取消认领选中的种子【慎重啊，扣钱的！】", () => this.cancelClaimSelectedSeeds(), "cancelClaimSelectedSeeds" + this.suffix, "margin-left: 150px;");
        this.selectAllButton = this.createButton("全部选择", () => this.selectAllSeeds(), "selectAllSeeds" + this.suffix);
        this.unselectAllButton = this.createButton("取消全选", () => this.unselectAllSeeds(), "selectAllSeeds" + this.suffix);
        this.container.parentElement.insertBefore(this.cancelClaimButton, this.container);
        this.container.parentElement.insertBefore(this.unselectAllButton, this.cancelClaimButton);
        this.container.parentElement.insertBefore(this.selectAllButton, this.unselectAllButton);
        this.container.parentElement.insertBefore(this.claimButton, this.selectAllButton);
    }

    initEvents() {
        this.container.addEventListener("click", (event) => {
            if (event.target.tagName === "INPUT" && event.target.type === "checkbox") {
                this.updateSelectedSeeds();
            }
        });
    }

    createButton(text, onClick, id, style) {
        const button = document.createElement("button");
        button.textContent = text;
        button.onclick = onClick;
        button.id = id;
        button.style = style;
        return button;
    }

    createCheckboxes() {
        this.seedItems.forEach((item, index) => {
            const checkBox = document.createElement("input");
            checkBox.type = "checkbox";
            checkBox.id = `_${index}${this.suffix}`;
            checkBox.checked = true;
            item.querySelector("td").appendChild(checkBox);
        });
    }

    updateSelectedSeeds() {
        this.selectedSeeds = this.seedItems.filter((item, index) => {
            const checkBox = item.querySelector(`#_${index}${this.suffix}`);
            return checkBox.checked;
        });
    }

    claimSelectedSeeds() {
        this.selectedSeeds.forEach((item) => {
            const tid = item.querySelector("td:nth-child(2) > a").href.split("=")[1].split("&")[0];
	    const temp = item.querySelector("td:nth-child(13) > button:nth-child(1)").dataset.claim_id;
                if (temp != '0') {
                    alert("您已经认领该种，无需重复认领");
                    return;
                }
            this.claimSeed(this.addApi, `action=addClaim&params%5Btorrent_id%5D=${tid}`);
        });
    }

    cancelClaimSelectedSeeds() {
        const confirmed = confirm("确认取消认领吗？要扣钱的！");

        // 如果用户点击了确认按钮
        if (confirmed) {
            this.selectedSeeds.forEach((item) => {
                const tid = item.querySelector("td:nth-child(13) > button:nth-child(1)").dataset.claim_id;
                if (tid === '0') {
                    alert("您没有认领该种，无需取消");
                    return;
                }
                this.claimSeed(this.delApi, `action=removeClaim&params%5Bid%5D=${tid}`);
            });
        }
    }

    claimSeed(url, data) {
        let xhr = new XMLHttpRequest();
        xhr.open('POST', url);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                console.log(xhr.status);
            }
        };
        xhr.send(data);
    }

    selectAllSeeds() {
        this.seedItems.forEach((item, index) => {
            const checkBox = item.querySelector(`#_${index}${this.suffix}`);
            checkBox.checked = true;
        });
        this.updateSelectedSeeds();
    }

    unselectAllSeeds() {
        this.seedItems.forEach((item, index) => {
            const checkBox = item.querySelector(`#_${index}${this.suffix}`);
            checkBox.checked = false;
        });
        this.updateSelectedSeeds();
    }
}

let init = (containerSelector, childNumber, suffix, apis) => {
    const btn = document.createElement("button");
    btn.textContent = "加载";
    btn.addEventListener("click", () => {
        const table = document.querySelector(containerSelector);
        if (!table || table.style.display === "none") {
            alert("请先展开并等待右侧列表加载完成后再点击");
            return;
        }
        if (document.querySelector("#claimSelectedSeeds" + suffix) != null) {
            return;
        }
        const seedClaimer = new SeedClaimer(containerSelector, suffix, ...apis);
	seedClaimer.updateSelectedSeeds();
    });
    document.querySelectorAll(".main > tbody > tr > td:nth-child(1) > table > tbody > tr:nth-child(" + childNumber + ") > td:nth-child(1)")[0].appendChild(btn);
}

const apiList = ["https://leaves.red/ajax.php", "https://leaves.red/ajax.php"]

init("#ka1", 22, "_", apiList);
init("#ka3", 24, "__", apiList);