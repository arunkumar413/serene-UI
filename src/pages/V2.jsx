import "../v2.css";

export function V2docs() {
    const btnClasses = [
        "btn-primary-small",
        "btn-primary-medium",
        "btn-primary-large",

        "btn-secondary-small",
        "btn-secondary-medium",
        "btn-secondary-large",

        "btn-primary-small btn-primary-small-outlined",
        "btn-primary-medium btn-primary-medium-outlined",
        "btn-primary-large btn-primary-large-outlined",


        "btn-secondary-small btn-seconday-small-outlined",
        "btn-secondary-medium btn-secondary-medium-outlined",
        "btn-secondary-large btn-secondary-large-outlined",



        "btn-seconday-small-outlined",


    ];

    const btnElements = btnClasses.map(function (item, index) {
        return (
            <button key={item} className={item}>
                {item}
            </button>
        );
    });

    return (
        <div className="V2docs">
            <div
                style={{
                    display: "grid",
                    //   flexDirection: "row",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    justifyContent: "center",
                    gap: "0.5rem",
                    alignItems: "center",
                }}
            >
                {btnElements}
            </div>
        </div>
    );
}
