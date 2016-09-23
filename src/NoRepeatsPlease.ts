export class NoRepeats {
    static checkRepeats(input: string): number {

        var arr = (input + '').split(''),
            permutations = [];

        function swap(a, b)
        {
            var tmp = arr[a];
            arr[a] = arr[b];
            arr[b] = tmp;
        }

        function generate(n) {
            var regex = /[,]/g;
            if (n == 1) {
                permutations.push(arr.join().replace(regex, ''));
            } else {
                for (var i = 0; i != n; ++i) {
                    generate(n - 1);
                    swap(n % 2 ? 0 : i, n - 1);
                }
            }
        }

        generate(arr.length);
        var permutationsCount = 0;

        for (var i = 0; i < permutations.length; i++) {

            if (!this.hasRepeatedLetters(permutations[i])) {

                permutationsCount++;
            }
        }

        return permutationsCount;
    };

     static hasRepeatedLetters(str: string): boolean {
        var checkConsecutiveRegEx = /(.)\1/;
        return checkConsecutiveRegEx.test(str);
    }
}