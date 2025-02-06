import Markdown from "react-markdown"

export default function CloudRecipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
                <h2>Chef Cloud Recomends!</h2>
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )
}

