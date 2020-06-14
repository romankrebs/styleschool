import React from "react";
import { Grid, Paper } from "@material-ui/core";
import { textAlign } from "@material-ui/system";

const Text = props => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={12}>
          <Paper style={{ padding: 20, textAlign: "left", fontSize: "1.1em" }}>
            <p>
              Курс обучения дает возможность определиться с тем, что для нас в
              искусстве по-прежнему является классикой и образцом, и тем, что
              имеем сегодня иного и взамен. Ответ на вопрос, а что мы имеем
              взамен и почему современное искусство так не похоже на свое
              прошлое, почему мусор попал в музей, а зритель стал почти
              равноправным с автором создателем нужно искать не в событиях
              последних десятилетий и даже не в XX веке, начавшим с отрицания
              классических систем, а в очень далеком прошлом.
            </p>
            <p>
              Цель курса &ndash; проследить эволюцию систем визуальности и
              структуру художественного образа от канонического через
              Возрождение, Новое время, модернизм до постмодернизма и
              метамодернизма и постараться понять, что формы современного
              искусства &ndash; это закономерность, обусловленная не только
              индустриальной и постиндустриальной эпохой, но и изменением
              отношения человека к своему телу и к способу познания и реакции на
              мир.
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Text;