//export default function TabButton(props) {
export default function TabButton({children, onSelect}) {

    return (
        <li><button onClick={onSelect}>{children}</button></li>
    );
}