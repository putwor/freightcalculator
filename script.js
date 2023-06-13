  console.log("from script file");

  let portCount = 1;

  function addPortSection(portSections) {
    var container = document.getElementById(portSections);
    var template = document.getElementById("portSectionTemplate");
    var clone = template.content.cloneNode(true);

    var portNumberElement = clone.querySelector(".port-number span");
    var portNumber = portCount;
    portNumberElement.innerText = `Port ${portNumber}`;
    portCount++;

    var portSelectElement = clone.querySelector("#port_name");
    var portSelectId = `port_name_${portNumber}`;
    portSelectElement.setAttribute("name", `port_name_${portNumber}`);
    portSelectElement.setAttribute("id", portSelectId);

    var portLabelElement = clone.querySelector("label[for='port_name']");
    portLabelElement.setAttribute("for", portSelectId);
    
    var currencySelectElement = clone.querySelector("#currency");
    var currencySelectId = `currency_${portNumber}`;
    currencySelectElement.setAttribute("name", `currency_${portNumber}`);
    currencySelectElement.setAttribute("id", currencySelectId);

    var termsSelectElement = clone.querySelector("#terms");
    var termsSelectId = `terms_${portNumber}`;
    termsSelectElement.setAttribute("name", `terms_${portNumber}`);
    termsSelectElement.setAttribute("id", termsSelectId);

    var activitySelectElement = clone.querySelector("#activity");
    var activitySelectId = `activity_${portNumber}`;
    activitySelectElement.setAttribute("name", `activity_${portNumber}`);
    activitySelectElement.setAttribute("id", activitySelectId);
//
    var cargo_typeSelectElement = clone.querySelector("#cargo_type");
    var cargo_typeSelectId = `cargo_type_${portNumber}`;
    cargo_typeSelectElement.setAttribute("name", `cargo_type_${portNumber}`);
    cargo_typeSelectElement.setAttribute("id", cargo_typeSelectId);
//
    var cargoQuantityInputElement = clone.querySelector(`#cargo_quantity`);
    var cargoQuantityInputId = `cargo_quantity_${portNumber}`;
    cargoQuantityInputElement.setAttribute("name", cargoQuantityInputId);
    cargoQuantityInputElement.setAttribute("id", cargoQuantityInputId);
    
    var loading_daysInputElement = clone.querySelector(`#loading_days`);
    var loading_daysInputId = `loading_days_${portNumber}`;
    loading_daysInputElement.setAttribute("name", loading_daysInputId);
    loading_daysInputElement.setAttribute("id", loading_daysInputId);


    var crane_usageInputElement = clone.querySelector(`#crane_usage`);
    var crane_usageInputId = `crane_usage_${portNumber}`;
    crane_usageInputElement.setAttribute("name", crane_usageInputId);
    crane_usageInputElement.setAttribute("id", crane_usageInputId);

    var cargo_feesInputElement = clone.querySelector(`#cargo_fees`);
    var cargo_feesInputId = `cargo_fees_${portNumber}`;
    cargo_feesInputElement.setAttribute("name", cargo_feesInputId);
    cargo_feesInputElement.setAttribute("id", cargo_feesInputId);

    var freight_rateInputElement = clone.querySelector(`#freight_rate`);
    var freight_rateInputId = `freight_rate_${portNumber}`;
    freight_rateInputElement.setAttribute("name", freight_rateInputId);
    freight_rateInputElement.setAttribute("id", freight_rateInputId);

    var port_chargesInputElement = clone.querySelector(`#port_charges`);
    var port_chargesInputId = `port_charges_${portNumber}`;
    port_chargesInputElement.setAttribute("name", port_chargesInputId);
    port_chargesInputElement.setAttribute("id", port_chargesInputId);

    var surveying_feesInputElement = clone.querySelector(`#surveying_fees`);
    var surveying_feesInputId = `surveying_fees_${portNumber}`;
    surveying_feesInputElement.setAttribute("name", surveying_feesInputId);
    surveying_feesInputElement.setAttribute("id", surveying_feesInputId);

    var misc_costInputElement = clone.querySelector(`#misc_cost`);
    var misc_costInputId = `misc_cost_${portNumber}`;
    misc_costInputElement.setAttribute("name", misc_costInputId);
    misc_costInputElement.setAttribute("id", misc_costInputId);

    container.appendChild(clone);
  }


  function removePortSection(button) {
    var portSection = button.closest(".form-section");
    if (portSection) {
      // Check if the section is the fuel and exchange rate section
      if (portSection.classList.contains("fuel-section")) {
        console.error("Cannot remove the fuel and exchange rate section.");
        return;
      }

      portSection.parentNode.removeChild(portSection);

      // Get all the port sections except the fuel section
      var portSections = document.querySelectorAll(
        ".form-section:not(.fuel-section)"
      );

      // Update the port numbers for each section
      for (var i = 0; i < portSections.length; i++) {
        var portNumber = i + 1;
        var portNumberElement = portSections[i].querySelector(".port-number");
        console.log("Port Count:", portCount);
        // Check if the port number element exists
        if (portNumberElement) {
          portNumberElement.innerText = `Port ${portNumber}`;
        } else {
          console.error(
            "Port number element not found for section:",
            portSections[i]
          );
          return; // Exit the function to prevent further errors
        }
      }

      // Decrement the port count
      portCount--;
    } else {
      console.error("Port section not found for button:", button);
    }
  }

  function submitForm() {
    var form = document.getElementById("portsForm");
    var formData = new FormData(form);
    var searchParams = new URLSearchParams(formData);
  
    var url = "output.html?" + searchParams.toString();
    window.location.href = url;
  }
  

  // Test console log to check port count

  function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    
    // Get the form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Display the form data in the console
    for (let entry of formData.entries()) {
      console.log(entry[0] + ": " + entry[1]);
    }
    
    // Additional code logic here (if needed)
  }

  window.addEventListener("DOMContentLoaded", function () {
    // Extract query parameters from the URL
    const urlParams = new URLSearchParams(window.location.search);

    // Populate the Trade Information table
    // ...

    // Populate the Port Information table
    const portTable = document.getElementById("port-table");
    const outputContainer = document.getElementById("output");

    // Mapping for Port Names
    const portNameMap = {
        1: "Bangkok (BK)",
        2: "Ayutthaya - Bangpain (AB)",
        3: "Ayutthaya - Nakorn Luang (ANL)",
        4: "Bahodopi (BHDP)",
        5: "Balikpapan (BPN)",
        6: "Bang Sapan (BS)",
        7: "Bangpakong (BAK)",
        8: "Batam (BAT)",
        9: "Belawan (BRW)",
        10: "Benoa (Bal",
        11: "Bintan (BTN)",
        12: "Bintulu (BIN)",
        13: "Bitung (BIT)",
        14: "Bontang (BXT)",
        15: "Bourbon (BOUR)",
        16: "Brunei (BRU)",
        17: "Banyuwangi - Tanjung Wangi (BJU)",
        18: "Cai Lan (CLN)",
        19: "Cam Pha (CPH)",
        20: "Can Tho (VCA)",
        21: "Cat Lai (CLI)",
        22: "Cayagan de Oro City (Macabalan wharf) (CDO)",
        23: "Century Harbour (MHI)",
        24: "Chantaburi LaemSing (CLS)",
        25: "Chittagong (CTG)",
        26: "Cigading (CIG)",
        27: "Danang (DAD)",
        28: "Davao (Sasa Wharf) (DVO)",
        29: "Dumai (DMI)",
        30: "Dung Quat (DQT)",
        31: "Fangcheng (FAN)",
        32: "Futong (FTG)",
        33: "Godau port (GDP)",
        34: "Haiphong (HPH)",
        35: "Halong Bay (HLG)",
        36: "HO CHI MINH (HCM)",
        37: "Hon Gai (HON)",
        38: "Hong Kong (HKG)",
        39: "Jakarta (JAK)",
        40: "Jambi (JBI)",
        41: "K.K. Kota Kinabalu (KK)",
        42: "Kampot (KMP)",
        43: "Kantang (KTG)",
        44: "Kedah (KKH)",
        45: "Kelantan (KLT)",
        46: "Kemaman (KMN)",
        47: "Khanom (KHM)",
        48: "Ko Sichang (KSI)",
        49: "Kolkata (CCU)",
        50: "Kor Samui (KSM)",
        51: "Kuantan (KT)",
        52: "Kuching (KUC)",
        53: "Labuan (LBN)",
        54: "Laem Chabang (LCB)",
        55: "Lahad Datu (LDU)",
        56: "Lhokseumawe (LHOK)",
        57: "Lumut (LUM)",
        58: "Maeklong (Firesun) (MKG)",
        59: "Makassar (MAK)",
        60: "Mahachai (MHI)",
        61: "Malacca (MAL)",
        62: "Manila Habour (MNL)",
        63: "Maptaphut (MAT)",
        64: "Marunda (MRD)",
        65: "Muara (MUR)",
        66: "My Tho (MUT)",
        67: "Nan Tong (NTG)",
        68: "Narathiwat (NAW)",
        69: "Nghi Son (NGH)",
        70: "Ningde (NDE)",
        71: "Nunukan (NNX)",
        72: "Oknha Mong Port (OMP)",
        73: "Onomichi (ONO)",
        74: "Padang - Telux Buyur (TBR)",
        75: "PAKAN Baru (PKRU)",
        76: "Palembang (PLB)",
        77: "Panjang (PNJ)",
        78: "Pasir Gudang (PAS)",
        79: "Patimban (PTB)",
        80: "Pattani (PTN)",
        81: "Penang (PNG)",
        82: "Phnom Penh (PNH)",
        83: "Phra Chulachomklao Fort (PCF)",
        84: "Phuket (HKT)",
        85: "Pontianak (PON)",
        86: "Port Kelang (PKG)",
        87: "Pulau Bai (PUB)",
        88: "Pulau Tioman (PUL)",
        89: "Quang Ninh (QNI)",
        90: "Quy Nhon (UIH)",
        91: "Ranong (RAN)",
        92: "Sabang (SBG)",
        93: "Saigon New Port (SPCT)",
        94: "Salalah (SLL)",
        95: "Samalaju (SMJ)",
        96: "Sandakan (SDK)",
        97: "Sattahip (STH)",
        98: "Semarang (SMR)",
        99: "Serang (SRG)",
        100: "Sibolga (SBG)",
        101: "Sihanoukville (KOS)",
        102: "Singapore (SIN)",
        103: "Sorong (SOQ)",
        104: "Sri Racha (SR)",
        105: "Subic Bay (SBFZ)",
        106: "Surabaya (SUB)",
        107: "Taichung (TXG)",
        108: "Taipei (TPE)",
        109: "Talang Duku (TKD)",
        110: "Tandjung Priok (TPI)",
        111: "Tanjung Langsat (TLP)",
        112: "Tanjung Pelepas (TPS)",
        113: "Tanjung Priok (TPK)",
        114: "Tanjung Wangi (TNW)",
        115: "Tarahan (TRA)",
        116: "Tarakan (TRK)",
        117: "Tianjin (Xingang) (XG)",
        118: "Trincomalee (TCO)",
        119: "Tuticorin (TCR)",
        120: "Ujung Pandang (UPG)",
        121: "Vung Tau (VT)",
        122: "Xiamen (XMN)",
        123: "Yangon (RGN)",
        124: "Yichang (YIC)",
        125: "Yokohama (YKK)",
        126: "Zamboanga (ZAM)"
        // Add more options as needed
    };

    // Mapping for Currency
    const currencyMap = {
        1: "United States Dollar (USD)",
        2: "Thai Bhat (THB)",
        3: "Malaysian Ringgit (MYR)",
        // Add more options as needed
    };

    // Mapping for Shipping Terms
    const shippingTermsMap = {
        1: "Freight Only",
        2: "Free In Out (FIO)",
        3: "Free-in Liner-out (FILO)",
        4: "Liner-in Free-out (LIFO)",
        5: "Full Liner"
        // Add more options as needed
    };

    // Mapping for Shipping Activity
    const shippingActivityMap = {
        1: "Loading",
        2: "Discharging",
        3: "Nothing",
        // Add more options as needed
    };

    // Mapping for Cargo Type
    const cargoTypeMap = {
        1: "N/A",
        2: "Rice Bagged (50KG)",
        3: "Palm Kernel Expeller (PKE)",
        4: "Urea",
        5: "Steel Coil",
        6: "Steel Scrap",
        7: "Wheat Bagged (50KG)",
        // Add more options as needed
    };

    // Get all the query parameters starting with "port_name_"
    const portParams = Array.from(urlParams.entries()).filter(([key, value]) =>
        key.startsWith("port_name_")
    );

    // Iterate over each port section
    portParams.forEach(([key, portName], index) => {
        const portNameValue = portNameMap[urlParams.get(`port_name_${index + 1}`)] || "0";
        const currency = currencyMap[urlParams.get(`currency_${index + 1}`)] || "0";
        const terms = shippingTermsMap[urlParams.get(`terms_${index + 1}`)] || "0";
        const activity = shippingActivityMap[urlParams.get(`activity_${index + 1}`)] || "0";
        const cargoType = cargoTypeMap[urlParams.get(`cargo_type_${index + 1}`)] || "0";
        const cargoQuantity = urlParams.get(`cargo_quantity_${index + 1}`) || "0";
        const loadingDays = urlParams.get(`loading_days_${index + 1}`) || "0";
        const craneUsageHours = urlParams.get(`crane_usage_${index + 1}`) || "0";
        const cargoBrokerageFees = urlParams.get(`cargo_fees_${index + 1}`) || "0";
        const cargoFreightRate = urlParams.get(`freight_rate_${index + 1}`) || "0";
        const portChargesPDA = urlParams.get(`port_charges_${index + 1}`) || "0";
        const surveyingFees = urlParams.get(`surveying_fees_${index + 1}`) || "0";
        const otherMiscCosts = urlParams.get(`misc_cost_${index + 1}`) || "0";

        // Create a new row in the Port Information table
        const row = portTable.insertRow();
        row.innerHTML = `
        <td>${index + 1}</td>
        <td>${portNameValue}</td>
        <td>${currency}</td>
        <td>${terms}</td>
        <td>${activity}</td>
        <td>${cargoType}</td>
        <td>${cargoQuantity}</td>
        <td>${loadingDays}</td>
        <td>${craneUsageHours}</td>
        <td>${cargoBrokerageFees}</td>
        <td>${cargoFreightRate}</td>
        <td>${portChargesPDA}</td>
        <td>${surveyingFees}</td>
        <td>${otherMiscCosts}</td>
    `;
    });
});

window.addEventListener("DOMContentLoaded", function () {
  // Retrieve the serialized form data from session storage
  const storedFormData = sessionStorage.getItem("formState");

  if (storedFormData) {
    // Parse the serialized form data
    const formData = JSON.parse(storedFormData);

    // Restore the form inputs with the stored values
    const form = document.getElementById("portsForm"); // Replace "your-form-id" with the ID of your form

    // Iterate over each form field
    Object.entries(formData).forEach(([name, value]) => {
      const input = form.elements.namedItem(name);
      if (input) {
        // Set the value of the form field
        input.value = value;
      }
    });

    // Get the number of port sections
    const numPorts = Object.keys(formData).reduce((count, key) => {
      if (key.startsWith("port_name_")) {
        const sectionIndex = parseInt(key.replace("port_name_", ""));
        return Math.max(count, sectionIndex);
      }
      return count;
    }, 0);

    // Restore the port sections
    const portTable = document.getElementById("port-table");
    for (let i = 1; i <= numPorts; i++) {
      const portNameValue = formData[`port_name_${i}`] || "";
      const currency = formData[`currency_${i}`] || "";
      const terms = formData[`terms_${i}`] || "";
      const activity = formData[`activity_${i}`] || "";
      const cargoType = formData[`cargo_type_${i}`] || "";
      const cargoQuantity = formData[`cargo_quantity_${i}`] || "";
      const loadingDays = formData[`loading_days_${i}`] || "";
      const craneUsageHours = formData[`crane_usage_${i}`] || "";
      const cargoBrokerageFees = formData[`cargo_fees_${i}`] || "";
      const cargoFreightRate = formData[`freight_rate_${i}`] || "";
      const portChargesPDA = formData[`port_charges${i}`] || "";
      const surveyingFees = formData[`surveying_fees_${i}`] || "";
      const otherMiscCosts = formData[`misc_cost_${i}`] || "";

      // Create a new row in the Port Information table
      const row = portTable.insertRow();
      row.innerHTML = `
        <td>${i}</td>
        <td>${portNameValue}</td>
        <td>${currency}</td>
        <td>${terms}</td>
        <td>${activity}</td>
        <td>${cargoType}</td>
        <td>${cargoQuantity}</td>
        <td>${loadingDays}</td>
        <td>${craneUsageHours}</td>
        <td>${cargoBrokerageFees}</td>
        <td>${cargoFreightRate}</td>
        <td>${portChargesPDA}</td>
        <td>${surveyingFees}</td>
        <td>${otherMiscCosts}</td>
      `;
    }
  }
});

// Add an event listener to the "Back" button or link
const backButton = document.getElementById("back-button"); // Replace "back-button" with the ID of your "Back" button or link
backButton.addEventListener("click", function () {
  // Serialize the form data
  const form = document.getElementById("portsForm"); // Replace "your-form-id" with the ID of your form
  const formData = new FormData(form);
  const serializedFormData = JSON.stringify(Object.fromEntries(formData));

  // Store the serialized form data in session storage
  sessionStorage.setItem("formState", serializedFormData);
});
