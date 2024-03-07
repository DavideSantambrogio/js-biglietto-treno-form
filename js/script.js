document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("ticket-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Recupera i dati dal modulo
        const username = document.getElementById("username").value;
        const startStation = document.getElementById("start-station").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        // const km = document.getElementById("km").value;
        const age = document.getElementById("age").value;



        // Genera il biglietto dinamicamente
        const ticketContent = `
            <div class="ticket__main">
                <div class="header">Hogwarts Express</div>
                <div class="info passenger">
                    <div class="info__item">Passenger</div>
                    <div class="info__detail">${username}</div>
                </div>
                <div class="info">
                    <div class="info__item">Age</div>
                    <div class="info__detail">${age}</div>
                </div>
                <div class="info platform"> <span>Depart </span><span>from </span><span>platform</span>
                    <div class="number">
                        <div>9</div>
                        <div> <span>3</span><span>4</span></div>
                    </div>
                </div>
                <div class="info departure">
                    <div class="info__item">Depart</div>
                    <div class="info__detail">${startStation}</div>
                </div>
                <div class="info arrival">
                    <div class="info__item">Arrive</div>
                    <div class="info__detail">Hogsmeade</div>
                </div>
                <div class="info date">
                    <div class="info__item">Date</div>
                    <div class="info__detail">${date}</div>
                </div>
                <div class="info time">
                    <div class="info__item">Time</div>
                    <div class="info__detail">${time}</div>
                </div>
                <div class="info carriage">
                    <div class="info__item">car</div>
                    <div class="info__detail">4</div>
                </div>
                <div class="info seat">
                    <div class="info__item">Seat</div>
                    <div class="info__detail">6B</div>
                </div>
                <div class="fineprint"> 
                    <p>Boarding begins 30 minutes before departure. Snacks available for purchase from The Honeydukes Express.</p>
                    <p>This ticket is Non-refundable • Hogwarts Express Railway Authority</p>
                </div>
                <div class="snack">
                    <svg viewBox="0 -11 414.00053 414">
                        <path d="m202.480469 352.128906c0-21.796875-17.671875-39.46875-39.46875-39.46875-21.800781 0-39.472657 17.667969-39.472657 39.46875 0 21.800782 17.671876 39.472656 39.472657 39.472656 21.785156-.023437 39.445312-17.683593 39.46875-39.472656zm0 0"></path>
                        <path d="m348.445312 348.242188c2.148438 21.691406-13.695312 41.019531-35.390624 43.167968-21.691407 2.148438-41.015626-13.699218-43.164063-35.390625-2.148437-21.691406 13.695313-41.019531 35.386719-43.167969 21.691406-2.148437 41.019531 13.699219 43.167968 35.390626zm0 0"></path>
                        <path d="m412.699219 63.554688c-1.3125-1.84375-3.433594-2.941407-5.699219-2.941407h-311.386719l-3.914062-24.742187c-3.191407-20.703125-21.050781-35.9531252-42-35.871094h-42.699219c-3.867188 0-7 3.132812-7 7s3.132812 7 7 7h42.699219c14.050781-.054688 26.03125 10.175781 28.171875 24.0625l33.800781 213.515625c3.191406 20.703125 21.050781 35.957031 42 35.871094h208.929687c3.863282 0 7-3.132813 7-7 0-3.863281-3.136718-7-7-7h-208.929687c-14.050781.054687-26.03125-10.175781-28.171875-24.0625l-5.746094-36.300781h213.980469c18.117187-.007813 34.242187-11.484376 40.179687-28.597657l39.699219-114.578125c.742188-2.140625.402344-4.511718-.914062-6.355468zm0 0"></path>
                    </svg>
                </div>
                <div class="barcode">
                    <div class="barcode__scan"></div>
                    <div class="barcode__id">001256733</div>
                </div>
            </div>
            <div class="ticket__side">
                <div class="logo"> 
                    <p>Hogwarts Express</p>
                </div>
                <div class="info side-arrive">
                    <div class="info__item">Arrive</div>
                    <div class="info__detail">Hogsmeade</div>
                </div>
                <div class="info side-depart">
                    <div class="info__item">Depart</div>
                    <div class="info__detail">${startStation}</div>
                </div>
                <div class="info side-date">
                    <div class="info__item">Date</div>
                    <div class="info__detail">${date}</div>
                </div>
                <div class="info side-time">
                    <div class="info__item">Time</div>
                    <div class="info__detail">${time}</div>
                </div>
                <div class="barcode">
                    <div class="barcode__scan"></div>
                    <div class="barcode__id">001256733</div>
                </div>
            </div>
        `;

        // Inserisci il biglietto nel documento HTML
        const ticketContainer = document.querySelector(".ticket");
        ticketContainer.innerHTML = ticketContent;
    });

    const clear = document.getElementById("clear");
    clear.addEventListener("click", function (event) {
        event.preventDefault();

        form.reset();
    });
});
