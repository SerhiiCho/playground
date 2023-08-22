package main

import "testing"

func Test_calc(t *testing.T) {
	type args struct {
		num1 int
		num2 int
	}

	type oneCase struct {
		name       string
		args       args
		wantResult int
	}

	tests := []oneCase{
		{
			name:       "simple numbers",
			args:       args{num1: 1, num2: 1},
			wantResult: 2,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			if gotResult := calc(tt.args.num1, tt.args.num2); gotResult != tt.wantResult {
				t.Errorf("calc() = %v, want %v", gotResult, tt.wantResult)
			}
		})
	}
}
