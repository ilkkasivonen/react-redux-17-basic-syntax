import { useState } from "react";

const lorem = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;

const HideAndShow = () => {
    const list = [
        { item: "First item", content: lorem, visible: false },
        { item: "Second item", content: lorem, visible: false },
    ];

    const [itemList, setVisibility] = useState(list);

    return (
        <>
            <div>
                {itemList.map((listItem) => (
                    <div key={listItem.item}>
                        <header
                            style={{ backgroundColor: "#ccc" }}
                            onClick={() => {
                                itemList.map((item) => {
                                    if (item.item === listItem.item) {
                                        item.visible = !item.visible;
                                    }
                                    return item;
                                });
                                setVisibility([...itemList]);
                            }}
                        >
                            {listItem.item}{" "}
                            <span
                                style={{
                                    fontSize: ".7em",
                                    fontWeight: "bolder",
                                }}
                            >
                                Click me!
                            </span>
                        </header>
                        <div
                            className="content"
                            style={{
                                display: listItem.visible ? "block" : "none",
                            }}
                        >
                            {listItem.content}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default HideAndShow;
