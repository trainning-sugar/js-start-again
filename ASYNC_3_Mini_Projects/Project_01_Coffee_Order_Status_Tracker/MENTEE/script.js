/*
===========================================================
PROJECT 1 — Coffee Order Status Tracker (setTimeout)
===========================================================

🎯 WHAT YOU ARE BUILDING
A small UI where you click “Place Order” and the order progresses:
Idle → Pending → Brewing → Ready

You will SEE the difference between:
✅ Synchronous code (runs immediately)
✅ Asynchronous code (runs later)

-----------------------------------------------------------
IMPORTANT CONCEPT (READ THIS)
When you click a button:
1) Your click handler runs synchronously (right now)
2) Any setTimeout callbacks run later (after the delay)
That’s why your first console logs appear before the status changes.
-----------------------------------------------------------
STEP 2 — Create "state" variables (memory in JS)
You need to remember things between clicks.

Create:
- currentOrderId (string)
- timeoutIds (array) to store each setTimeout id

Why array?
Because you might schedule more than 1 timeout and need to cancel ALL of them.

Example idea:
const timeoutIds = [];
const id = setTimeout(...);
timeoutIds.push(id);
-----------------------------------------------------------
STEP 4 — Place Order button (setTimeout chain)
When user clicks Place Order:

1) console.log("SYNC: Place Order clicked")
   (This proves this part runs immediately)

2) clearAllTimeouts()
   (If user clicks Place Order twice, you don't want old timers still running)

3) generate an order id:
   Example: "CF-" + random 4 digits
   Save to currentOrderId and show in orderIdText

4) disable placeBtn, enable cancelBtn

5) Immediately show "Pending"
   - setStatus("Pending", "warn")
   - setStep(stepPending, "active")

6) Schedule "Brewing" after ~1500ms
   - mark pending done
   - mark brewing active
   - setStatus("Brewing", "warn")
   - store the timeout id

7) Schedule "Ready" after ~3500ms total
   - mark brewing done
   - mark ready active
   - setStatus("Ready", "good")
   - disable cancelBtn, enable placeBtn
   - store the timeout id

-----------------------------------------------------------
STEP 5 — Cancel button (clearTimeout)
When user clicks Cancel:

1) console.log("SYNC: Cancel clicked")
2) clearAllTimeouts()  ✅ (this stops future steps)
3) setStatus("Cancelled", "bad")
4) enable placeBtn, disable cancelBtn

-----------------------------------------------------------
STEP 6 — Reset button
Reset should always bring you back to Idle:
- clearAllTimeouts()
- resetTimeline()
- enable placeBtn, disable cancelBtn

-----------------------------------------------------------
✅ TEST YOUR APP
- Click Place Order → Cancel quickly → should stop progressing
- Click Place Order and wait → should reach Ready
- Click Reset at any time → should return to Idle cleanly
*/

// ✅ WRITE YOUR CODE BELOW THIS LINE

//Buttons
const placeBtn = document.getElementById("placeBtn");
const cancelBtn = document.getElementById("cancelBtn");
const resetBtn = document.getElementById("resetBtn");

//UI
const statusText = document.getElementById("statusText");
const orderIdText = document.getElementById("orderIdText");

//Pendiente -> en preparacion -> Listo (steps)
const stepPending = document.getElementById("stepPending");
const stepBrewing = document.getElementById("stepBrewing");
const stepReady = document.getElementById("stepReady");

// State
let currentOrderId = "123456";
// Because you might schedule more than 1 timeout and need to cancel ALL of them.
const timeoutIds = []; 

function resetTimeline() {
   console.log("reset timeline");

   stepPending.classList.remove("active", "done");
   stepBrewing.classList.remove("active", "done");
   stepReady.classList.remove("active", "done");
   statusText.textContent = "Idle";
   statusText.classList.remove("toneWarn", "toneGood", "toneBad");
   statusText.style.color = 
   orderIdText.textContent = "-";
}


function setStep(stepElement, state) {   
   
   if (state === "active") {
      stepElement.classList.add("active");
   }

   if (state === "done"){
      stepElement.classList.remove("active");
      stepElement.classList.add("done");
   }
}


function setStatus(text, tone) {

   const toneClasses = {
         neutral : 'toneNeutral',
         warn : 'toneWarn',
         good : 'toneGood',
         bad: 'toneBad'
      };

  statusText.textContent = text;
  
  console.log(toneClasses[tone]);

  statusText.classList.add(toneClasses[tone]);
}

function clearAllTimeouts() {
   console.log('clear Timeouts');
   timeoutIds.forEach((id) => {
      clearTimeout(id);
   });
   timeoutIds.splice(0);
   return timeoutIds; 
}


function getOrderId () {
   return "CF-" + Math.floor(Math.random() * 10000);
}


function placeOrder() {
   console.log("SYNC: Place Order clicked");
   
   clearAllTimeouts();

   //Order Id
   currentOrderId = getOrderId();
   orderIdText.textContent = currentOrderId;

   /* Status inicial */
    setStatus("Pending", "neutral");
    
    /*Pending - Brewing - Ready */
    setStep(stepPending, "active");

   /* Los botones se tienen que deshabilitar */ 
    placeBtn.setAttribute('disabled', true);
    cancelBtn.removeAttribute('disabled');
   
    /*Siguiente proceso -  */

    const brewingTimeoutId = setTimeout(() => {
         setStep(stepPending, "done");
         setStep(stepBrewing, "active");
         setStatus("Brewing", "warn");
      }, 1500);

   /* Pusheamos el id */
   timeoutIds.push(brewingTimeoutId);
   console.log(timeoutIds);

   const readyTimeoutId = setTimeout(() => {
    setStep(stepBrewing, "done");
    setStep(stepReady, "active");
    setStatus("Ready", "good");
    
    placeBtn.removeAttribute('disabled');
    cancelBtn.setAttribute('disabled', true);
   }, 3500);

    timeoutIds.push(readyTimeoutId);
    console.log(timeoutIds);
}


function cancelOrder() {
   console.log("SYNC: Cancel clicked");
   clearAllTimeouts();
   setStatus("Cancelled", "bad");
   
   statusText.classList.remove("toneWarn", "toneGood", "toneBad");

   placeBtn.removeAttribute("disabled"); //enable
   cancelBtn.setAttribute("disabled", true); //disable
};