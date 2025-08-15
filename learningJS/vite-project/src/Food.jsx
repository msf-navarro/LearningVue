function Food(){
    const food1 = "orange";
    const food2 = "banana";
    return (
        <>
            <p>Here are some foods that I like and dislike:</p>
            <ul>
                <li>I love {food1.toUpperCase()}</li>
                <li>I dislike {food2}</li>
            </ul>
        </>
    );
}
export default Food;
