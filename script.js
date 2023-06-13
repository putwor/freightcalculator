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
