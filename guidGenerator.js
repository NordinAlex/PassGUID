// Funktion för att generera Bulk GUID
function generateBulkGUID() {
  var bulkCount = document.getElementById("bulk-count").value;

  if (bulkCount < 1 || bulkCount > 500) {
    alert("Ange ett nummer mellan 1 och 500 för Bulk GUID.");
    return;
  }

  var results = [];
  var useCurlyBraces = document.getElementById(
    "guid-format-curly-braces"
  ).checked;
  var useDoubleQuotes = document.getElementById(
    "guid-format-double-quotes"
  ).checked;
  var useCommas = document.getElementById("guid-format-commas").checked;

  for (var i = 0; i < bulkCount; i++) {
    var guid = generateGUIDString();

    if (useCurlyBraces) {
      guid = `{${guid}}`;
    }

    if (useDoubleQuotes) {
      guid = `"${guid}"`;
    }

    if (useCommas && i < bulkCount - 1) {
      guid += ",";
    }

    results.push(guid);
  }

  var bulkResultElement = document.getElementById("bulk-guid-result");
  bulkResultElement.innerHTML = "";

  results.forEach(function (guid) {
    var guidElement = document.createElement("div");
    guidElement.textContent = guid;
    guidElement.className = "formatted-guid";
    bulkResultElement.appendChild(guidElement);
  });

  var copyBulkBtn = document.getElementById("copy-bulk-guid-btn");
  copyBulkBtn.disabled = false;
}

// Funktion för att generera ett random GUID V4
function generateGUIDString() {
  var guidFormat = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
  return guidFormat.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Funktion för att kopiera bulk GUIDs till urklipp
function copyBulkToClipboard() {
  var bulkGuids = document.querySelectorAll(".formatted-guid");
  var formatNewLine = document.getElementById("guid-new-line").checked;
  var guidText = Array.from(bulkGuids).map(function (guidElement) {
    return guidElement.textContent;
  });
  if (formatNewLine) {
    guidText = guidText.join("\n");
  }
  var tempInput = document.createElement("textarea");
  tempInput.value = guidText;
  document.body.appendChild(tempInput);
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  var copyBulkBtn = document.getElementById("copy-bulk-guid-btn");
  copyBulkBtn.innerText = "Kopierat!";
  copyBulkBtn.classList.add("copied");
  setTimeout(function () {
    copyBulkBtn.innerText = "Kopiera GUID";
    copyBulkBtn.classList.remove("copied");
  }, 2000);
}

// Funktion för att växla mellan olika formatval
function toggleGUIDFormat() {
  generateBulkGUID();
}
