const { useState } = React;
function App() {
    const [cookieCount, setCookieCount] = useState(0);
    const [moneyCount, setMoneyCount] = useState(1000);
    const [taxRate, setTaxRate] = useState(0.10)

    function buyCookie() {
        setCookieCount((prev) => prev + 1);
        setMoneyCount((prev) => prev - 5);
    }

    function sellCookie() {
        const cookies = Number(prompt("How much cookies would you like to sell?"));

        if (cookies > cookieCount) {
            alert("You don't have enough cookies!");
            return;
        }

        const price = Number(prompt("How much money would you like to sell them for?"));

        const earnings = cookies * 5;
        const tax = earnings * taxRate;
        const finalMoney = earnings - tax;

        setCookieCount((prev) => prev - cookies);
        setMoneyCount((prev) => prev + finalMoney);

        alert(`You've earned $${finalMoney} after taxes.`)
    }

    return(
        <>
        <h1>Cookie Business</h1>
        <p>There are {cookieCount} cookies</p>
        <p>Cookie price is $5</p>
        <button onClick={buyCookie} className="clickerbutton">Buy cookies</button>
        <button onClick={sellCookie} className="clickerbutton">Sell cookies</button>
        <div className="leaderboard">
            <p>Money: ${moneyCount}</p>
        </div>
        </>
    )
}
