# node-docs

- 실행방법

    ```plaintext
        실행할 폴더에 접근 후 node . (index.js를 실행함)
    ```

- worker_threads

    ```plaintext
        사용 목적: CPU 연산이 많은 부하가 있을 때 멀티 쓰레드로 CPU 부하를 낮추는데 목적이 있다.
        개념: main-thread와 worker-threads간 통신을 worker.postMessage(메인) parentPort.on(워커)로 한다. 양방향 통신
        sharedBuffer로 쓰레드간 통신에 사용하는 데이터 복사를 줄여 서버 자원을 절약할 수 있다
    ```
