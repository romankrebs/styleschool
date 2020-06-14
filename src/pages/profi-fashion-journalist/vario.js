import React from "react";
import { Grid } from "@material-ui/core";
import List from "../../components/list";
import Zoom from "react-reveal";

export default function Vario() {
  return (
    <div>
      <Grid container alignItems="flex-start" spacing={4}>
        <Grid item xs={12} md={12}>
          <h2
            style={{
              fontFamily: "Roboto",
              fontSize: "2em",
              fontWeight: 700,
              textAlign: "center",
              color: "rgb(100,100,100)",
              padding: "30px 0",
              margin: 0
            }}
          >
            Варианты обучения
          </h2>
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <img
              src="/img/green/comment-outline.svg"
              alt=""
              style={{ height: 80 }}
            />
            <h3
              style={{
                fontFamily: "Roboto",
                fontSize: "1.3em",
                fontWeight: 700,
                textAlign: "center",
                color: "rgb(100,100,100)",
                padding: "30px 0",
                margin: 0
              }}
            >
              Вольный слушатель
            </h3>
          </div>
          <List
            arr={[
              <Zoom>доступ к on-line модулям сразу после оплаты</Zoom>,
              <Zoom>возможность выбирать отдельные интересующие модули</Zoom>,
              <Zoom>
                обучение без домашних заданий и без ограничений по времени
              </Zoom>,
              <Zoom>
                доступ к тематическим вебинарам с интересующими преподавателями
              </Zoom>
            ]}
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              color: "rgb(100,100,100)"
            }}
            olStyle={{
              listStyle: "url(/img/green/check-bold.svg)"
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div style={{ textAlign: "center" }}>
            <img src="/img/green/school.svg" alt="" style={{ height: 80 }} />
            <h3
              style={{
                fontFamily: "Roboto",
                fontSize: "1.3em",
                fontWeight: 700,
                textAlign: "center",
                color: "rgb(100,100,100)",
                padding: "30px 0",
                margin: 0
              }}
            >
              Профессиональное обучение
            </h3>
          </div>
          <List
            arr={[
              <Zoom>
                последовательный процесс изучения технологий с установленным
                расписанием
              </Zoom>,
              <Zoom>
                постоянный контроль и контакт с преподавателями, тесты
              </Zoom>,
              <Zoom>
                возможность практического применения знаний на проектах,
                стажировка
              </Zoom>,
              <Zoom>
                подтверждение компетенций Дипломом Университета о
                профессиональной подготовке
              </Zoom>
            ]}
            style={{
              fontFamily: "Roboto",
              fontSize: "1em",
              color: "rgb(100,100,100)"
            }}
            olStyle={{
              listStyle: "url(/img/green/check-bold.svg)"
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
