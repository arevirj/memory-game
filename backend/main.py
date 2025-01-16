from fastapi import FastAPI

app = FastAPI()


@app.get("/leaderboard")
async def root():
    return {"message": "Hello World"}