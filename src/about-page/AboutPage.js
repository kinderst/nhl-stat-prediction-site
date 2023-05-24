import {Container} from "react-bootstrap";

const AboutPage = props => {
    return(
        <Container className="text-start pt-4">
            <p>
                This website displays NHL Season Player stats and predictions for 32 different categories,
                from assists, to on ice against goals, and so on. Credit for the data goes
                to <a href="https://moneypuck.com/data.htm">MoneyPuck</a>for the data, as well as
                more detailed description of the data columns.
            </p>
            <p>While most of the categories are self explanatory, some key notes about the categories:
                <ul>
                    <li>I_F_ stands for Individual For, meaning the player was directly attributed the stat</li>
                    <li>OnIce_F_ stands for On Ice For, meaning the player was on the ice for the stat for their team</li>
                    <li>OnIce_A_ stands for On Ice Against, meaning the player was on the ice for the stat opposing team</li>
                </ul>
            </p>
            <p>
                Some other key notes are that predictions are only made for years after where the player
                played for at least 10 icehours, and weren't already veterans in the year 2008
                when the data begins (because we are trying to learn career trajectories).
                Icehours are defined as (icetime / 60) / 60, to go from
                icetime in seconds to icehours. This is to avoid outliers, because the model was trained
                using this icehour statistic (among other transforms), and if a player only played a few
                minutes of icetime but scored a goal, they would look like Wayne Gretzky on steroids to
                the model. This does introduce bias and other setbacks, but also provides advantages which
                seem to outweigh the negatives, considering the final predictions seem very accurate, though
                I am unsure where to compare. I also note that there are many, many improvements that could
                be done to this, even though the results are already good. For example, training individual
                models to predict a single variable, or other feature transforms and data manipulation
                techniques, as well as much more hyperparameter tuning, are just some of the things that
                come to mind that would only further improve results. It should also be noted that many
                of the examples shown were also in the training set (but not all!), and for a full list
                of which players were not used in the training set (to get a better sense of model
                generalizability to unseen data), see the GitHub and the train/val/test accuracy splits.
                You can find the code used to train the model in the GitHub repo below.
            </p>
            <p>
                This website was created by Scott Kinder, you can find my
                LinkedIn <a href="https://www.linkedin.com/in/kinders/">here</a>, and my GitHub with
                this repo <a href="https://github.com/kinderst/">here</a>. The GitHub also contains
                scripts that were used to train the model (PyTorch seq-to-seq transformer
                (based on Attention Is All You Need paper) but modified to work with
                timeseries data).
            </p>
        </Container>
    )
}

export default AboutPage;